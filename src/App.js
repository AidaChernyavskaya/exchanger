import React, {useEffect, useState} from "react";
import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import ExchangeService from "./API/ExchangeService";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [exchangeRate, setExchangeRate] = useState([]);

    let source = 'RUB';

    useEffect( () => {
        fetchExchangeRate();
    }, [])

    window.addEventListener('resize', e => {
        setWidth(window.innerWidth);
    })

    const getExchangeRate = (exchangeRate) => {
        let rates = [];
        let i = 0;
        for (let rate in exchangeRate) {
            rates.push(<div className={'exchange_rate__row'} key={i}>
                <p className={'text text__bold'}>{rate.slice(3, 6)}</p>
                <p className={'text'}>Название валюты</p>
                <p className={'text'}>{exchangeRate[rate]}</p>
            </div>)
            i += 1;
        }
        return rates;
    }

    async function fetchExchangeRate() {
        setTimeout(async () => {
            const rate = await ExchangeService.getExchangeRate(source);
            setExchangeRate(rate);
        })
    }

  return (
      <div>
          <Navbar/>

          <h1 className={'h1'}>Курс валют</h1>
          <div className={'content'}>
              <h2 className={'h2'}>Курс показан относительно базовой валюты - <span>{exchangeRate.source}</span></h2>
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
                          {getExchangeRate(exchangeRate.quotes)}
                      </div>
                      </div>
                  }
          </div>
      </div>
  );
}

export default App;
