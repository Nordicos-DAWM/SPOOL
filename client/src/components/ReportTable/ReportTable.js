import React from 'react';

const ReportTable = (props) => {
    const columns = props.columns;
    let data = props.data;
    const filter = props.filter;

    //Filtramos los datos antes de pasar los datos
    data = data.filter((obj)=>obj['type'].toLowerCase() === filter)

    return (
        <>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        {columns.map((column)=>{
                            return <th>{column}</th>
                        })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dat)=>{
                            return(
                                <tr>
                                    {Object.values(dat).map((value)=>{
                                        return <td>{value}</td>
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export { ReportTable };