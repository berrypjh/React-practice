import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import { Button } from "react-bootstrap";

const Voting = (props) => {
    const [candidateNumber, setCandidateNumber] = useState(0);
    const [name, setName] = useState("");

    const fetch = async () => {
        const candidateNumber = await contract.methods
            .getCandidateNumber()
            .call();
        setCandidateNumber(candidateNumber);
    };

    const addCandidate = async (e) => {
        await contract.methods
            .addCandidate(name)
            .send({ from: accounts, gas: 5000000 });
        setName("");
        fetch();
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            {loading ? (
                <div>Loading Web3, accounts, and contract...</div>
            ) : (
                <>
                    {candidateNumber}
                    <TextField
                        required
                        name="address"
                        sx={{ width: "100", displayPrint: "block" }}
                    />
                    <Button
                        onClick={addCandidate}
                        className="transaction_submit_btn"
                    >
                        제출
                    </Button>
                    <div>
                        <div></div>
                    </div>
                </>
            )}
        </>
    );
};

export default Voting;
