
const nodemailer = require('nodemailer');
const {Application, User, Project} = require('../databases/db');
const config = require('config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : config.get("mailer")
});

let contactEmail = async (req, res) => {
    const { name, birth, mail, message } = req.body;
    let contentHTML =`<b>Información de contacto</b><br><ul><li>Nombre: ${name}</li><li>Cumpleaños: ${birth} </li><li>Correo: ${mail} </li></ul><br><p>${message}</p>`;

    var mailOptions = {
        from: '"Robert Moreno Carrillo" <robertmorenoc@gmail.com>',
        to: 'robertmorenoc@gmail.com',
        subject: 'Website Contact Form', 
        html: contentHTML
    };

    let info = await transporter.sendMail(mailOptions, (err,data)=>{
        if(err){
            res.json({message:"No se ha podido enviar el correo"});
        }else{
            res.json({message:"Correo enviado"});
        }
    });

}

let sendEmail = async (name, project, state, mail, reason,res ) =>{
    let contentHTML;
    if (reason){
        contentHTML =
        `<h3>Hola ${name}!</h3>
        <p>El estado de tu aplicación al proyecto<b> ${project}</b> ha cambiado a: <b>${state}.</b></p>
        <p>Motivo de rechazo:</p>
        <p>${reason}</p>`;
    }else{
        contentHTML =
        `<h3>Hola ${name}!</h3>
        <p>El estado de tu aplicación al proyecto<b> ${project}</b> ha cambiado a: <b>${state}.</b></p>
        `;
    }
    
    var mailOptions = {
        from: '"Robert Moreno Carrillo" <robertmorenoc@gmail.com>',
        to: mail,
        subject: 'Actualización de estado de aplicación', 
        html: contentHTML
    };

    let info = await transporter.sendMail(mailOptions, (err,data)=>{
        if(err){
            console.log(err);
            res.status(500).send("No se ha podido enviar el correo");
        }else{
            console.log('Email Sent');
            res.status(200).send("Correo enviado.");
        }
    });
}


let deleteProject = async (req,res,next) =>{
    const apps =  await Application.findAll({ 
        where: {
            projectId: req.params.id
        },
        include:[{
            model: User,
            attributes: ['firstName','email']
        },{
            model: Project,
            attributes: ['title']
        }],
    });
    apps.forEach(async app => {
        await Application.update({ state: "Rechazado" }, {
            where: {
              id: app.id
            }
          });
        res.status(200).json({deleted: true, message: "Se ha eliminado correctamente"});
        try{
        sendEmail(app.user.firstName, app.project.title, "Rechazado",app.user.email, "El proyecto el cual usted ha aplicado ha sido eliminado por la persona que lo propuso.",res);
        }catch(error){
            console.log("Error autenticando el correo");
        }
    });
}



let updateApplication = async (req,res,next) =>{
        
        const apps =  await Application.findAll({ 
            where: {
                projectId: req.body.projectId,
            },
            include:[{
                model: User,
                attributes: ['firstName','email']
            },{
                model: Project,
                attributes: ['title']
            }],
        });
        apps.forEach(async app => {
            if (app.id == req.params.id){
                try{
                    sendEmail(app.user.firstName, app.project.title, req.body.state, app.user.email, req.body.rejectionReason,res);
                
                }catch(error){
                    console.log(error);
                }
            }
            else if (req.body.state =="Aceptado"){

            await Application.update({ state: "Rechazado" }, {
                where: {
                  id: app.id,
                }
              });
            
                try{
                    sendEmail(app.user.firstName, app.project.title, "Rechazado",app.user.email, "En este proyecto ha aceptado otra aplicación",res);
                }catch(error){
                    console.log(error);
                }
            }
        });

        if(req.body.state =="Aceptado"){
            await Project.update({ state: "En desarrollo" }, {
                where: {
                    projectId: req.body.projectId
                }
            });
        }

}

module.exports = {
    contactEmail,
    deleteProject,
    updateApplication
}