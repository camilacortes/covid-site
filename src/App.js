import React from 'react';
import Home from '../src/components/Home'
import UnitedStatesData from './components/UnitedStatesData'
import Resources from '../src/components/Resources'
import VaccinationData from './components/VaccinationData';

import {Link, Switch, Route} from "react-router-dom"



function App() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/unitedstatesdata">USA</Link>
          <Link className="links" to="/resources">Resources</Link>
          <Link className="links" to="/vaccinationdata">Vaccination Data</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/unitedstatesdata">
          <UnitedStatesData/>
        </Route>
        <Route path="/resources">
          <Resources/>
        </Route>
        <Route path="/vaccinationdata">
          <VaccinationData/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
