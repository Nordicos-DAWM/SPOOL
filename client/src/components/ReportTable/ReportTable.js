import React from 'react';

const ReportTable = (props) => {
    const colums = props.columns;
    const data = props.data;
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
                                        return <td>value</td>
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