import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from '../../containers/MainContainer';
import DetailPage from '../DetailPage/DetailPage';
import Header from '../Header/Header';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ MainContainer }/>
        <Route path="/:id" component={ DetailPage }/>
      </Switch>
    </Router>
  );
}
  
