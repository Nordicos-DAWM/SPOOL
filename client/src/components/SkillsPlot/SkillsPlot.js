import React,{useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';


const SkillsPlot = () =>{
    const [chartData,setChartData] = useState({});
    const options = {
        responsive:true,
        scales:{  
            yAxes: [{
                ticks: {
                beginAtZero: true
            }
        }]
    }}
    const chart = () =>{
        setChartData(
            {
            labels:["React","Angular","GraphQL","Vue.Js","Svelte"],
            datasets:[
                {
                    label:'Top 5 Habilidades Requeridas',
                    data:[10,8,11,15,10],
                    backgroundColor:[
                    'rgba(0, 140, 255, 0.18)',
                    'rgba(216, 50, 255, 0.18)',
                    'rgba(255, 247, 0, 0.18)',
                    'rgba(255, 71, 0, 0.18)',
                    'rgba(59, 179, 0, 0.18)']
                }
            ],
            
        }
        )
    }

    useEffect(()=>{
        chart();
    },[]);

    return(
        <Bar data={chartData} options={options}/>
    )
}

export {SkillsPlot};