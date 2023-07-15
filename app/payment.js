const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/c88bbeeda34946ed9273b54a298615d7');
const web3 = new Web3(provider);


const contractABI = require('./contractABI.json');
const contractAddress = '0x123abc...';
const contract = new web3.eth.Contract(contractABI, contractAddress);


// Call a read-only function
contract.methods.getBalance().call()
  .then(balance => {
    console.log('Contract balance:', balance);
  })
  .catch(error => {
    console.error('Error calling function:', error);
  });

// Send a transaction to a payable function
const amount = web3.utils.toWei('0.1', 'ether');
const options = {
  from: '0xYOUR_ADDRESS',
  value: amount,
};
contract.methods.purchaseItem().send(options)
  .then(receipt => {
    console.log('Transaction receipt:', receipt);
  })
  .catch(error => {
    console.error('Error sending transaction:', error);
  });