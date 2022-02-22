import React, { useEffect, useState } from "react";
import Winner from "./sections/winner";

const Results = (props) => {
    const { contract, loading } = props.web3Data;

    const [candidateNumber, setCandidateNumber] = useState(0);
    const [candidateMember, setCandidateMember] = useState([]);

    const fetch = async () => {
        const candidateNumber = await contract.methods
            .getCandidateNumber()
            .call();
        setCandidateNumber(candidateNumber);
    };

    const fetchCandidate = async () => {
        let candidateArray = [];
        for (let i = 1; i <= candidateNumber; i++) {
            const candidate = await contract.methods
                .candidateDetails(i - 1)
                .call();
                candidateArray.push(candidate);
        }
        setCandidateMember(candidateArray)
    };

    useEffect(() => {
        if (Object.keys(contract).length == 0) return;

        try {
            fetch();
            fetchCandidate();
        } catch (error) {
            alert(
                `Failed.`
            );
            console.error(error);
        }
    }, [contract, candidateNumber]);

    const data = {
        candidateNumber,
        candidateMember
    }

    return (
        <>
            {loading ? (
                <div>Loading Web3, accounts, and contract...</div>
            ) : (
                <>
                    <Winner data={data} />
                </>
            )}
        </>
    );
};

export default Results;