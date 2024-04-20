// src/components/BuyTokens.js
import React, { useState } from 'react';
import { buyTokens } from '../utils/contract';

function BuyTokens() {
    const [amount, setAmount] = useState(0);

    const handleBuyTokens = async () => {
        try {
        await buyTokens(amount);
        alert('Tokens bought successfully!');
        } catch (error) {
        alert('Error buying tokens: ' + error.message);
        }
    };

    return (
        <div>
        <h2>Buy Tokens</h2>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleBuyTokens}>Buy Tokens</button>
        </div>
    );
}

export default BuyTokens;
