import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
