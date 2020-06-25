import React, { useState } from 'react'
import rawData from '../data/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'



const Cardui = () => {
    return (
        <div style={{ height: '251px' }}>
            <h1>UI CARD VIEW</h1>

            {rawData.map((data, index) => {
                return (< Card key={index} border="primary" >
                    <Card.Header >{data.Date}</Card.Header>
                    <Card.Body>
                        <Card.Text>Open: {data.Open}, High: {data.High}, Low: {data.Low}, Close: {data.Close}</Card.Text>
                    </Card.Body>
                </Card>)
            })
            }


        </div >
    )
}

export default Cardui;