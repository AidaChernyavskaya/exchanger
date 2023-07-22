import React, {useEffect, useState} from "react";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import ExchangeRate from "./pages/ExchangeRate";

function App() {

  return (
      <div>
          <Navbar/>
          <ExchangeRate/>
      </div>
  );
}

export default App;
