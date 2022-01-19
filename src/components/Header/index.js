import React from 'react';
import './header.css'; 

function Header({basicAmount, onChangeAmount,}) {
    
    return (
        <header className="header">
            <h1 className="converter__title">Converter</h1>
        <div className="input__container">
            <input 
                type="number" 
                min="0"
                placeholder='Enter a number'
                className="header__input"
                value={basicAmount}
                onChange= {(event) => {
                    // console.log('event', event.target.value);
                  onChangeAmount(event.target.value);
                }}
            />
            <span className="currency__symbol">€</span>
        </div>
            
        </header>
    )
}

export default Header;
