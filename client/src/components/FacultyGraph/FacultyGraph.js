import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

const FacultyGraph = () =>{
    const [chartData,setChartData] = useState({});
    const chart = () =>{
        setChartData({
            labels:["FADCOM","FCV","FCNM","FCSH","FCT","FIEC","FIMCP","FIMCM"],
            datasets:[
                {
                    label:'Estudiantes por facultad',
                    data:[10,7,11,15,10,25,9,7],
                    backgroundColor:[
                    'rgba(0, 140, 255, 0.18)',
                    'rgba(216, 50, 255, 0.18)',
                    'rgba(255, 247, 0, 0.18)',
                    'rgba(255, 71, 0, 0.18)',
                    'rgba(59, 179, 0, 0.18)',
                    'rgba(0, 16, 151, 0.18)',
                    'rgba(255, 16, 151, 0.18)',
                    'rgba(120, 128, 100, 0.18)']
                }
            ],
            
        })
    };

    useEffect(()=>{
        chart()
    },[]);
    return(
        <div>
            <Bar data={chartData}/>
        </div>
    )

}

export {FacultyGraph};