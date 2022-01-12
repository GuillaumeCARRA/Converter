import React from 'react';
import './currencies.css'

function Currencies({currencies}) {
    return (
        <div className="currencies">
            <h2 className="currencies__title">Currencies</h2>
            <ul className="currencies__list">
               {currencies.map(({
                   name
               }) => (
                <li key={name} className="currencies__name">
                    {name}
                </li>
               ))}
            </ul>
        </div>
    )
}

export default Currencies;
