import React,{useState, useEffect} from 'react';
import {Radar} from 'react-chartjs-2';


const CategoriesPlot = (props) =>{
    const [chartData,setChartData] = useState({});
    
    const chart = () =>{
        setChartData(
            {
                labels: props.category,
                datasets: [{
                    label:'Categorías',
                    data: props.count,
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