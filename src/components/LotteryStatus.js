// src/components/LotteryStatus.js
import React, { useState } from 'react';
import { checkLotteryStatus } from '../utils/contract';

function LotteryStatus() {
    const [status, setStatus] = useState('');

    const handleCheckStatus = async () => {
        try {
        const lotteryStatus = await checkLotteryStatus();
        setStatus(lotteryStatus);
        } catch (error) {
        alert('Error checking lottery status: ' + error.message);
        }
    };

    return (
        <div>
        <h2>Lottery Status</h2>
        <button onClick={handleCheckStatus}>Check Status</button>
        <p>{status}</p>
        </div>
    );
}

export default LotteryStatus;
