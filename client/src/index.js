import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  <Router basename="/gcims_integration">
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/models" element={<Models />} />     
      <Route exact path="/map" element={<Map />} />      
      <Route exact path="/health" element={<Health />} /> 
      <Route path="/workflow" element={<Workflow />} />     
      <Route path="/data" element={<Data />} />      
      <Route path="/visual" element={<Visual />} /> 
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();