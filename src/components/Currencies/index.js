import React from 'react';

function Currencies({currencies}) {
    console.log(currencies);
    return (
        <div className="currencies">
            <h1 className="currencies__title">Currencies</h1>
            <ul className="currencies__list">
               {currencies.map(({
                   name
               }) => (
                <li>
                    {name}
                </li>
               ))}
            </ul>
        </div>
    )
}

export default Currencies;
