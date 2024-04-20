// src/components/PlaceBet.js
import React, { useState } from 'react';
import { placeBet } from '../utils/contract';

function PlaceBet() {
    const [amount, setAmount] = useState(0);

    const handlePlaceBet = async () => {
        try {
        await placeBet(amount);
        alert('Bet placed successfully!');
        } catch (error) {
        alert('Error placing bet: ' + error.message);
        }
    };

    return (
        <div>
        <h2>Place Bet</h2>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handlePlaceBet}>Place Bet</button>
        </div>
    );
}

export default PlaceBet;
