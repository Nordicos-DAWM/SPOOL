import React,{useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

const SkillsPlot = (props) =>{
    function getObjects(){
        let datos = []
        for(let i=0;i<props.count.length;i++){
            datos.push({
                skill:props.skill[i],
                count:props.count[i]
            })
        }
        return datos
    }
    let data = getObjects()

    data.sort((a,b)=>{return b.count-a.count})
    let labels=[];
    let counst=[];

    for(let i=0;i<5;i++){
        labels.push(data[i].skill);
        counst.push(data[i].count)
    }
    console.log(labels)
    const [chartData,setChartData] = useState({})
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
                    data:counst,
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
        
        chart();
    },[]);

    return(
        
        <Bar data={chartData} options={options}/>
    )
}

export {SkillsPlot};