import React, { useState } from 'react'
import rawData from '../data/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'




const renderTable = (data, index) => {
    const style1 = index % 2 == 0 ? myEvenStyle : myOddStyle
    return (
        <tr style={style1} key={index}>
            <th>{data.Date}</th>
            <th>{data.Open}</th>
            <th>{data.High}</th>
            <th>{data.Low}</th>
            <th>{data.Close}</th>
            <th>{data.Volume}</th>
        </tr>
    )

}

const myOddStyle = {
    backgroundColor: 'darkgrey'

}
const myEvenStyle = {
    backgroundColor: 'white'

}

const TableGridComp = () => {
    return (
        <div>
            < h1 > UI TABLE VIEW</h1 >
            <Table style={{ height: '251px', backgroundColor: 'lightblue' }} >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {rawData.map(renderTable)}
                </tbody>
            </Table>
        </div>
    )

}

export default TableGridComp;