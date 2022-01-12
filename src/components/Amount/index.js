import React from 'react';
import './amount.css';

function Amount({amounts}) {
    return (
        <div className="amount">
            {amounts.map((amount) => (
                <div className="amount__content"> 
                   <p className="amount__rate">{amount.rate}</p>
                   <p className="amount__name">{amount.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Amount;
