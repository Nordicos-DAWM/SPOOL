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
                    data: [15, 10, 13, 11,5,10],
                    backgroundColor:['rgba(0, 16, 151, 0.18)']
                }]
            }
        )
    }
    const options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Categorias',
            fontFamily:'sans-serif'

        }    
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        <Radar data={chartData} options={options}/>
    )
}

export {CategoriesPlot};