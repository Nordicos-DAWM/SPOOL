const data=[
    {
        faculty:"FADCOM",
        careers:["Diseño Gráfico", "Producción para Medios de Comunicación","Diseño de Productos"]
    },{
        faculty:"FCV",
        careers:["Biología","Ingeniería Agrícola y Biológica","Licenciatura en Nutrición y Dietética"]
    },{
        faculty:"FCNM",
        careers:[ "Logística y Transporte","Estadística","Ingeniería Química","Matemática"]
    },{
        faculty:"FCSH",
        careers:["Economía","Administración de Empresas","Auditoría y Control de Gestión","Arqueología","Turismo"]
    },{
        faculty:"FCT",
        careers:["Petróleo","Geología","Minas","Ingeniería Civil"]
    },{
        faculty:"FIEC",
        careers:["Electricidad","Electrónica y Automatización","Telecomunicaciones","Telemática","Computación"]
    },{
        faculty:"FIMCP",
        careers:["Mecánica","Alimentos","Ingeniería Industrial","Materiales","Mecatrónica"]
    },{
        faculty:"FIMCM",
        careers:[["Acuicultura","Ingeniería Naval","Oceonografía"]]
    }
]
function loadFaculties (){
    for(let object of data){
        const faculty = object.faculty;
        let option = document.createElement("option");
        const optionText = document.createTextNode(faculty);
        option.setAttribute("value",faculty);
        option.appendChild(optionText);

        let select = document.getElementById("faculties");
        select.appendChild(option);
    }
}

function loadCareers(value){
    let careers=[];
    for(let object of data){
        if(object.faculty===value){
            careers=object.careers;
        }
    }
    document.getElementById("careers").innerHTML=``;
    const plantilla =
        `<select className={'form-control custom-select' + (submitted && !career ? ' is-invalid' : '')} id="careers">
        <option selected disabled>Carrera</option>
        </select>`
    document.getElementById("careers").innerHTML+=plantilla;
    for(let career of careers){
        let option = document.createElement("option");
        const optionText = document.createTextNode(career);
        option.setAttribute("value",career);
        option.appendChild(optionText);

        let select = document.getElementById("careers");
        select.appendChild(option);
    }


}

export {loadFaculties,loadCareers}