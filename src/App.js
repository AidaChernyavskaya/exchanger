import React, {useState} from "react";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', e => {
        setWidth(window.innerWidth);
    })
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
                  {width > 700
                  ?   <div className={'exchange_rate'}>
                          <div className={'exchange_rate__column'}>
                              <div className={'exchange_rate__row'}>
                                  <p className={'text text__bold'}>Букв. код</p>
                                  <p className={'text text__bold'}>Валюта</p>
                                  <p className={'text text__bold'}>Курс</p>
                              </div>
                              <div className={'exchange_rate__row'}>
                                  <p className={'text text__bold'}>RUB</p>
                                  <p className={'text'}>Российский рубль</p>
                                  <p className={'text'}>34.45</p>
                              </div>
                          </div>
                          <div className={'hr__vertical'}></div>
                          <div className={'exchange_rate__column'}>
                              <div className={'exchange_rate__row'}>
                                  <p className={'text text__bold'}>Букв. код</p>
                                  <p className={'text text__bold'}>Валюта</p>
                                  <p className={'text text__bold'}>Курс</p>
                              </div>
                              <div className={'exchange_rate__row'}>
                                  <p className={'text text__bold'}>RUB</p>
                                  <p className={'text'}>Российский рубль</p>
                                  <p className={'text'}>34.45</p>
                              </div>
                          </div>
                      </div>
                  :   <div className={'exchange_rate'}>
                      <div className={'exchange_rate__column'}>
                          <div className={'exchange_rate__row'}>
                              <p className={'text text__bold'}>Букв. код</p>
                              <p className={'text text__bold'}>Валюта</p>
                              <p className={'text text__bold'}>Курс</p>
                          </div>
                          <div className={'exchange_rate__row'}>
                              <p className={'text text__bold'}>RUB</p>
                              <p className={'text'}>Российский рубль</p>
                              <p className={'text'}>34.45</p>
                          </div>
                          <div className={'exchange_rate__row'}>
                              <p className={'text text__bold'}>RUB</p>
                              <p className={'text'}>Российский рубль</p>
                              <p className={'text'}>34.45</p>
                          </div>
                      </div>
                      </div>
                  }
          </div>
      </div>
  );
}

export default App;
