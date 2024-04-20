import React, { useState, useEffect } from 'react';
import './App.css';
import LotteryStatus from './components/LotteryStatus';
import BuyTokens from './components/BuyTokens';
import PlaceBet from './components/PlaceBet';
import ClaimPrize from './components/ClaimPrize';
import ContractComponent from './components/Contract';
import { createPublicClient, http } from 'viem';

// Import the ABI JSON files
import LotteryTokenABI from './abis/LotteryToken.json';
import LotteryABI from './abis/Lottery.json';

function App() {
  const [lotteryContract, setLotteryContract] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const contractAddress = 'YOUR_CONTRACT_ADDRESS';
  const tokenAddress = 'YOUR_TOKEN_ADDRESS';

  useEffect(() => {
    async function initializeContracts() {
      try {
        // Create a public client instance
        const client = createPublicClient({
          transport: http(),
        });

        // Initialize Viem with your contract address and ABI
        const lotteryContract = client.createContract({
          address: contractAddress,
          abi: LotteryABI.abi,
        });
        setLotteryContract(lotteryContract);

        
        const tokenContract = client.createContract({
          address: tokenAddress,
          abi: LotteryTokenABI.abi,
        });
        setTokenContract(tokenContract);
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    }
    initializeContracts();
  }, [contractAddress, tokenAddress]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Lottery dApp</h1>
      </header>
      <main>
        <LotteryStatus lotteryContract={lotteryContract} tokenContract={tokenContract} />
        <BuyTokens tokenContract={tokenContract} />
        <PlaceBet lotteryContract={lotteryContract} tokenContract={tokenContract} />
        <ClaimPrize lotteryContract={lotteryContract} />
        <ContractComponent lotteryContract={lotteryContract} tokenContract={tokenContract} />
      </main>
    </div>
  );
}

export default App;