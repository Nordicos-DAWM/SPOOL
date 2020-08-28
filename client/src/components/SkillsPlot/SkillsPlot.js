import React,{useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {chatService, chartService} from '../../_services';

const SkillsPlot = () =>{
    const [chartData,setChartData] = useState({});
    const [labels,setLabels]=useState({});
    const [data,setData] = useState({})
    const options = {
        responsive:true,
        scales:{  
            yAxes: [{
                ticks: {
                beginAtZero: true
            }
        }]
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Top 5 habilidades requeridas',
            fontFamily:'sans-serif'

        }    
    }
    const chart = () =>{
        setChartData(
            {
            labels:labels,
            datasets:[
                {
                    label:'Top 5 Habilidades Requeridas',
                    data:[10,8,11,15,10],
                    backgroundColor:[
                    'rgba(169, 0, 80, 0.72)',
                    'rgba(97, 42, 176, 0.72)',
                    'rgba(14, 191, 176, 0.72)',
                    'rgba(14, 42, 176, 0.72)',
                    'rgba(169, 191, 80, 0.72)']
                    
                }
            ],
            
        }
        )
    }

    useEffect(()=>{
        function fetchSkills(){
            chartService.getSkills()
            .then(
                skills=>{
                    setLabels(skills)
                },
                error=>{
                    console.log(error)
                }
            )
        }
        fetchSkills();
        chart();
    },[]);

    return(
        <Bar data={chartData} options={options}/>
    )
}

export {SkillsPlot};