import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./views/login/login.jsx"
import Dashboard from "./views/dashboard/dashboard.jsx"
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="*" element={<h1 id="textonotfound"> No se encontro</h1>}/>
      </Routes>
    </Router>)
}

export default App;