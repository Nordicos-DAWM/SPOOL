import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';

const MatterGraph = (props) =>{
    const [chartData,setChartData] = useState({});
    const [options,setOptions] = useState({});
    const chart = () =>{
        setChartData({
            labels:["No","Si"],
            datasets:[
                {
                    label:'¿És una materia?',
                    data:props.count,
                    backgroundColor:[
                    'rgba(0, 117, 120, 1)',
                    'rgba(149, 52, 101, 1)']
                }
            ],
            
        })
        setOptions({
            title: {
                display: true,
                text: '¿Los proyectos fueron tomados como una materia?',
                fontFamily:'sans-serif'

            }
        })
    };

    useEffect(()=>{
        chart()
    },[]);
    return(
        <div>
            <Doughnut data={chartData} options={options}/>
        </div>
    )

}

export {MatterGraph};