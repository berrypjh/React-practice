import React, { useEffect, useState } from "react";
import electionContract from "../contracts/Election.json";
import getWeb3 from "../getWeb3";

const Home = () => {
  const [web3, setWeb3] = useState({});
  const [accounts, setAccounts] = useState("");
  const [contract, setContract] = useState({});
  const [candidateNumber, setCandidateNumber] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
  
        const deployedNetwork = electionContract.networks[networkId];

        const electionInstance = new web3.eth.Contract(
          electionContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setWeb3(web3);
        setAccounts(accounts[0]);
        setContract(electionInstance);
        setLoading(false);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
  const addCandidate = async (e) => {
    await contract.methods
      .addCandidate(name)
      .send({ from: accounts, gas: 5000000 });
    setName('');
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  if (!web3) {
    return (
      <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>Loading Web3, accounts, and contract...</div>
        )}
      </>
    );
  } else {
    return (
      <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {candidateNumber}
            <input
              autoFocus
              value={name}
              onChange={onNameChange}
              placeholder={"이름을 입력해주세요."}
            />
            <button onClick={addCandidate}>Add</button>
          </>
        )}
      </>
    );
  }
}

export default Home;