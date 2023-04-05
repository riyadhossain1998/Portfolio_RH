import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './ProjectPages/Page';
import Quora from './Quora';
import Home from './Homepage/Home';

import portfolio from '../Data/PageData/portfolio.json'
import musicsurf from '../Data/PageData/musicsurf_page.json'
import stonekeep from '../Data/PageData/stonekeep_page.json'
import oms from '../Data/PageData/oms_page.json'
import saladtime from '../Data/PageData/saladtime_page.json'
import featurenet from '../Data/PageData/featurenet_page.json'


function Routes() {

  return (
    <Switch>
      <Route exact path="/stonekeep">
        <Page data={stonekeep}/>
      </Route>
      <Route exact path="/intro">
        <Page data={portfolio}/>
      </Route>
      <Route exact path="/musicsurf">
        <Page data={musicsurf}/>
      </Route>
      <Route exact path="/oms">
        <Page data={oms}/>
      </Route>
      <Route exact path="/saladtime">
        <Page data={saladtime}/>
      </Route>
      <Route exact path="/fn">
        <Page data={featurenet}/>
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Quora />
      </Route>
    </Switch>
  );
}

export default Routes;