const Web3 = require('web3');
const fs = require('fs');

const ABI = JSON.parse(fs.readFileSync('./contracts_Voting_test_sol_VotingTest.abi').toString());
const BYTECODE = fs.readFileSync('./contracts_Voting_test_sol_VotingTest.bin').toString();

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

const accounts = [];
async function init(){
  await web3.eth.getAccounts().then(data => {
    data.forEach((x) => {
      accounts.push(x);
    });
  });
};

init().then(() => {
  const votingContract = new web3.eth.Contract(ABI); /* 스마트 컨트랙트 배포 후 주소 */
  
  votingContract.deploy({
    data: BYTECODE
  })
  .send({
    from: accounts[0],
    gas: 1500000,
    gasPrice: '20000000000'
  })
  .then((newContractsInstance) => {
    newContractsInstance.methods.getVotedCount('Park').call().then((data) => {
      console.log('Voted Count : ' + data);
    })
  });
})
