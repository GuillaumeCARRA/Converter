import React, {useEffect, useState} from 'react';
import Header from '../src/components/Header';
import Currencies from '../src/components/Currencies';
import Amount from '../src/components/Amount'; 

import currencie from '../src/data/currencies'; 

import './App.css';

function App() {

  // FOR OPEN AND CLOSE THE LIST OF CURRENCIES
  const [openCurrencies, setOpenCurrencies] = useState(true)

 
  // FOR SELECT THE CURRENCY THAT WE WANT
  const [currencies, setCurrenciesNames] = useState('United States Dollar')
  console.log('state currencies', currencies);
 
  // to change the value of the currency
  const [basicAmount, setBaseAmount]= useState(4); 
  console.log('la bse de la devise', basicAmount);

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

  

 
 
  // change la valeur de la devise exemple 1 = 1.09 ou 3 = 3.28 US Dollars
  /* FOR CHANGE THE RATE OF THE CURRENCY */
  const HandleAmount = () => {
    
    // console.log(amounts);
    // const test = setBaseAmout(currencie.find(
    //   (curr) => curr.name === currencies 
    // ))

    // const result = basicAmount * test

    // return result.

    // setRate(basicAmount * rate / rate)

    // setBaseAmount(2 * setRate(rate / rate))

    // const test = setBaseAmount(setRate(currencie.find(
    //   curr => curr.name === currencies
    // )))

    // console.log(test);

    // const result = basicAmount * test

    // console.log('testinho', result);
    // return result;

    

  
    const curr = currencie.find((curren) => curren.name === currencies); 
    console.log('recup',curr);
    
    const result = rates ? basicAmount * curr?.rate : setRate(basicAmount * curr?.rate)
    console.log('result', result);
    
    // useEffect(() => {
    //   console.log('le rate change');
    //   const curr = currencie.find((curren) => curren.name === currencies); 
    //   function init() {
    //      if(rate) {
    //         basicAmount * currencies.rate 
    //     } else {
    //       setRate(basicAmount * curr.rate)
    //     }
    //   }
    //  init()
      
    // }, [])
    

    return result; 



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
        {openCurrencies && <Currencies onCurrencieClick={changeCurrenciesNames} currencies={currencie} />}
        <Amount rate={HandleAmount()} currenciesNames={currencies}  />
    </div>
  );
}

export default App;
