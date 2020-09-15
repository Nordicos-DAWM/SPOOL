import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

const FacultyGraph = (props) =>{
    const [chartData,setChartData] = useState({});
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
            text: 'Estudiantes por facultad',
            fontFamily:'sans-serif'

        }    
    }
    const chart = () =>{
        setChartData({
            labels:props.faculty,
            datasets:[
                {
                    label:'Estudiantes por facultad',
                    data:props.count,
                    backgroundColor:[
                    'rgba(89, 48, 145, 0.72)',
                    'rgba(35, 124, 197, 0.72)',
                    'rgba(209, 151, 45, 0.72)',
                    'rgba(118, 172, 215, 0.72)',
                    'rgba(176, 126, 189, 0.72)',
                    'rgba(209, 48, 90, 0.72)',
                    'rgba(35, 175, 197, 0.72)',
                    'rgba(183, 48, 145, 0.72)']
                }
            ],
            
        })
    };

    useEffect(()=>{
        chart()
    },[]);
    return(
        <div>
            <Bar data={chartData} options={options}/>
        </div>
    )

}

export {FacultyGraph};