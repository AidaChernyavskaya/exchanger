import React from "react";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <div>
          <Navbar/>

          <h1 className={'h1'}>Курс валют</h1>
          <div className={'content'}>
              <h2 className={'h2'}>Курс показан относительно базовой валюты - RUB</h2>
              <h3 className={'h3'}>Изменить базовую валюту</h3>
              <div className={'input'}>
                  <input className={'input__field'} type={'text'} placeholder={'Базовая валюта'}/>
                  <button className={'input__button'}>Изменить</button>
              </div>
          </div>

      </div>
  );
}

export default App;
