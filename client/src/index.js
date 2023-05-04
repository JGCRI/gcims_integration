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
  <Router>
    <Navigation />
    <Routes>
      <Route path="/gcims_integration/home" element={<Home />} />
      <Route path="/gcims_integration/models" element={<Models />} />     
      <Route path="/gcims_integration/map" element={<Map />} />      
      <Route path="/gcims_integration/health" element={<Health />} /> 
      <Route path="/gcims_integration/workflow" element={<Workflow />} />     
      <Route path="/gcims_integration/data" element={<Data />} />      
      <Route path="/gcims_integration/visual" element={<Visual />} /> 
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();