import React, {useState} from 'react';
import Header from '../src/components/Header';
import Currencies from '../src/components/Currencies';
import Amount from '../src/components/Amount'; 

import currencie from '../src/data/currencies'; 

import './App.css';

function App() {

  // FOR OPEN AND CLOSE THE LIST OF CURRENCIES
  const [openCurrencies, setOpenCurrencies] = useState(true);

  // FOR SELECT THE CURRENCY THAT WE WANT
  const [currencies, setCurrenciesNames] = useState('United States Dollar');
  console.log('state currencies', currencies);
 
  // CHANGE THE VALUE OF THE CURRENT CURRENCY
  const [basicAmount, setBasicAmount]= useState(1); 
  console.log('la bse de la devise', basicAmount);

  // FOR SELECT THE RATES WE WANT
  const [rates, setRate] = useState({});
  console.log('rate -->', rates);

  
  /* FOR OPEN AND CLOSE THE LIST OF CURRENCIES */
  const handleOpen = () => {
    setOpenCurrencies(!openCurrencies);
  }

  /* FOR SELECT THE CURRENCY THAT WE WANT */
  const changeCurrenciesNames = (currencies) => {
    console.log(currencies);
    setCurrenciesNames(currencies); 
  }

  /* FOR CHANGE THE RATE OF THE CURRENCY */
  const handleAmount = () => {
    
    const curr = currencie.find((curren) => curren.name === currencies); 
    console.log('recup',curr);
    
    const result = rates ? basicAmount * curr.rate : setRate(basicAmount * curr.rate);
    console.log('result', result);

    return result.toFixed(2); 

  }

  /* FOR CHANGE THE VALUE OF THE AMOUNT */
  const handleValue = (newValue) => {
    setBasicAmount(newValue); 
  }

  /* FOR CHANGE THE TITLE OF THE PAGE */
  const changeTitle = () => {
    document.title = `Convertissseur: Euros vers ${currencies}`;
  }
  changeTitle();

 
  



  return (
    <div className="App">
        <Header basicAmount={basicAmount} onChangeAmount={handleValue} />
        <button
          className="button"
          type="button"
          onClick={handleOpen}
        >
          =
        </button>
        {openCurrencies && <Currencies onCurrencieClick={changeCurrenciesNames} currencies={currencie} />}
        <Amount rate={handleAmount()} currenciesNames={currencies}  />
    </div>
  );
}

export default App;
