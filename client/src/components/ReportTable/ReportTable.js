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
                                    {...dat}
                                </tr>
                            );
                        })}
                        <tr>
                            <th scope="row">1</th>
                            <td>Aaron</td>
                            <td>Seth</td>
                            <td>@aaron</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Daichi</td>
                            <td>Barbal</td>
                            <td>@daichi</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Tabor</td>
                            <td>Guju</td>
                            <td>@tabor</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export { ReportTable };