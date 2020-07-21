import React,{useState, useEffect} from 'react';
import {Radar} from 'react-chartjs-2';


const CategoriesPlot = () =>{
    const [chartData,setChartData] = useState({});
    
    const chart = () =>{
        setChartData(
            {
                labels: ['Ciencia de Datos', 'Desarrollo Web', 'Estadísitica', 'IOT','BioTecnología','Desarrollo de Videojuegos'],
                datasets: [{
                    label:'Categorías',
                    data: [15, 10, 13, 11,5,10]
                }]
            }
        )
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        <Radar data={chartData}/>
    )
}

export {CategoriesPlot};