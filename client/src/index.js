import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  Navigation,
  Home,
  Models,
  Map,
  Health,
  Workflow,
  Data,
  Visual
} from "./components";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />     
      <Route path="/map" element={<Map />} />      
      <Route path="/health" element={<Health />} /> 
      <Route path="/workflow" element={<Workflow />} />     
      <Route path="/data" element={<Data />} />      
      <Route path="/visual" element={<Visual />} /> 
      <Route path="/models" element={<Navigate to="/#/models" />} />
      <Route path="/map" element={<Navigate to="/#/map" />} />
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();