import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from '../../containers/MainContainer';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path="/:id" component={DetailPage}/>
      </Switch>
    </Router>
  );
}
  
