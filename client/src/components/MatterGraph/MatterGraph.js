import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';

const MatterGraph = () =>{
    const [chartData,setChartData] = useState({});
    const chart = () =>{
        setChartData({
            labels:["Si","No"],
            datasets:[
                {
                    label:'¿És una materia?',
                    data:[20,2],
                    backgroundColor:[
                    'rgba(0, 117, 120, 1)',
                    'rgba(149, 52, 101, 1)']
                }
            ],
            
        })
    };

    useEffect(()=>{
        chart()
    },[]);
    return(
        <div>
            <Doughnut data={chartData}/>
        </div>
    )

}

export {MatterGraph};