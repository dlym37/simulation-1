import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Bin from './components/Bin';
import Edit from './components/Edit';
import Shelf from './components/Shelf';

<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shelfs/A" component={ShelfA}/>
    <Route path="/shelfs/B" component={ShelfB}/>
    <Route path="/shelfs/C" component={ShelfC}/>
    <Route path="/shelfs/D" component={ShelfD}/>
</Switch>