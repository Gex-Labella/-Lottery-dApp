// src/components/Contract.js
import React from 'react';
import { openBets, purchaseTokens, bet } from '../utils/contract';

function Contract() {
    const handleOpenBets = async () => {
        try {
            await openBets(lotteryContract);
            alert('Bets opened successfully!');
        } catch (error) {
            alert('Error opening bets: ' + error.message);
        }
    };

    const handlePurchaseTokens = async () => {
        try {
            await purchaseTokens(lotteryContract, 100); // Purchase 100 tokens
            alert('Tokens purchased successfully!');
        } catch (error) {
            alert('Error purchasing tokens: ' + error.message);
        }
    };

    const handleBet = async () => {a
        try {
            await bet();
            alert('Bet placed successfully!');
        } catch (error) {
            alert('Error placing bet: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Contract Interaction</h2>
            <button onClick={handleOpenBets}>Open Bets</button>
            <button onClick={() => handlePurchaseTokens(100)}>Purchase Tokens</button>
            <button onClick={handleBet}>Place Bet</button>
        </div>
    );
}

export default Contract;
