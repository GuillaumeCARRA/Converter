import React from 'react';
import './amount.css';

function Amount({rate, currenciesNames}) {
    return (
        <div className="amount">
                <div className="amount__content"> 
                   <p className="amount__rate">{rate}</p>
                   <p className="amount__name">{currenciesNames}</p>
                </div>
        </div>
    )
}

export default Amount;
