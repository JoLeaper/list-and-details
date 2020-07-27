import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
  
