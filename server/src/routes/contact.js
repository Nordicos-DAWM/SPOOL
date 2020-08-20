const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.get('/', (req, res) => {
    res.send(`Email: ${process.env.PASSWORD}`)
});

router.post('/', async (req, res) => {
    const { name, birth, mail, message } = req.body;
    contentHTML =`
                <h1>Información de contacto<h1>
                <ul>
                    <li>Nombre: ${name}</li>
                    <li>Cumpleaños: ${birth} </li>
                    <li>Correo: ${mail} </li>
                </ul>
                <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: process.env.PASSWORD,
            pass: process.env.EMAIL
        }
    });

    let info = await transporter.sendMail({
        from: '"Spool Project" <spoolproject95@gmail.com>', // sender address,
        to: 'gcemas20@gmail.com',
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    }, (err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Email Sent');
        }
    })

    res.send('Received');
});


module.exports = router;