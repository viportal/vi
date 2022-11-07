//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewRequest from './components/NewRequest';
import Reports from './components/Reports';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/newRequest" element={<NewRequest/>}/>
          <Route exact path="/reports" element={<Reports/>}/>
        </Routes>
      </Router>
    )
  }
}
