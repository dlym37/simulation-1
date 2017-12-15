import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const massive = require('massive');
const server = require('./controllers/server');


const app = express();//SIM 1 74C
app.use(bodyParser.json());
app.use(cors());

app.get('/api/shelf/:id', server.readShelf);//SIM 1 74D-1
app.get('/api/bin/:id', server.readBin);
app.put('/api/bin/:id', server.update);//SIM 1 74D-2
app.delete('/api/bin/:id', server.delete);//SIM 1 74D-3
app.post('/api/bin:id', server.create)//SIM 1 74D-4


ReactDOM.render(
    <HashRouter>{/*SIM 1 42D*/}
        <Home/>
    </HashRouter>
);
const port = 3000;
app.listen(() => {
    console.log('I am lisening on port', port);
})
