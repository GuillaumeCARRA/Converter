import React from 'react';
import './currencies.css'

function Currencies({currencies, onCurrencieClick}) {
    return (
        <div className="currencies">
            <h2 className="currencies__title">Currencies</h2>
            <ul className="currencies__list">
               {currencies.map(({
                   name
               }) => (
                <li 
                    key={name} 
                    className="currencies__name"
                    onClick={() => {
                        const clickedCurrencie = name
                        console.log('cliqué', clickedCurrencie);
                        onCurrencieClick(clickedCurrencie)
                    }}
                    
                >
                    {name}
                </li>
               ))}
            </ul>
        </div>
    )
}

export default Currencies;
