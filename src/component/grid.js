import React, { useState } from 'react'
import rawData from '../data/data'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Cardui from './uiCard'
import TableGridComp from './uiTable'
import Button from 'react-bootstrap/Button'



const Tablegrid = () => {

    const [TState, setState] = useState(true);

    return (
        <div>
            <Jumbotron >
                <h1>TABLE SWITCHER</h1>
            </Jumbotron>

            <Button variant="success" onClick={() => setState(!TState)}>TOGGLE BUTTON </Button>

            {TState ? <TableGridComp /> : <Cardui />}


        </div >
    )
}

export default Tablegrid