// src/components/ClaimPrize.js
import React, { useState } from 'react';
import { claimPrize } from '../utils/contract';

function ClaimPrize() {
    const [amount, setAmount] = useState(0);

    const handleClaimPrize = async () => {
        try {
        await claimPrize(amount);
        alert('Prize claimed successfully!');
        } catch (error) {
        alert('Error claiming prize: ' + error.message);
        }
    };

    return (
        <div>
        <h2>Claim Prize</h2>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleClaimPrize}>Claim Prize</button>
        </div>
    );
}

export default ClaimPrize;
