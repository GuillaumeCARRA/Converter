import React, {useState} from 'react';
import Header from '../src/components/Header';
import Currencies from '../src/components/Currencies';
import Amount from '../src/components/Amount'; 

import currencie from '../src/data/currencies'; 

import './App.css';

function App() {

  // FOR OPEN AND CLOSE THE LIST OF CURRENCIES
  const [openCurrencies, setOpenCurrencies] = useState(true)
 
  // FOR SELECT THE CURRENCY THAT WE WANT
  const [currencies, setCurrenciesNames] = useState('United State Dollars')
  console.log(currencies);

  // to change the value of the currency
  const [basicAmount, setBaseAmout]= useState(2); 
  console.log('la bse de la devise', basicAmount);
  
  
  /* FOR OPEN AND CLOSE THE LIST OF CURRENCIES */
  const handleOpen = () => {
    setOpenCurrencies(!openCurrencies);
  }

  /* FOR SELECT THE CURRENCY THAT WE WANT */
  const changeCurrenciesNames = (currencies) => {
    console.log(currencies);
    setCurrenciesNames(currencies); 
  }


 
  // change la valeur de la devise exemple 1 = 1.09 ou 3 = 3.28 US Dollars
  /* FOR CHANGE THE RATE OF THE CURRENCY */
  const handleAmount = (basicAmount) => {
    
    setCurrenciesNames(basicAmount)

  }

  return (
    <div className="App">
        <Header basicAmount={basicAmount} />
        <button
          className="button"
          type="button"
          onClick={handleOpen}
        >
          =
        </button>
        {openCurrencies && <Currencies  changeCurrencyName={currencie} onCurrencieClick={changeCurrenciesNames} currencies={currencie} />}
        <Amount amounts={1.04} currenciesNames={currencies}  />
    </div>
  );
}

export default App;
