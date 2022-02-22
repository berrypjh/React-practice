import React, { useEffect, useState } from "react";

const Winner = (props) => {
  const { candidateNumber, candidateMember } = props.data;

  const [voteWinner, setVoteWinner] = useState({});

  const winner = async () => {
      let maxVoteWinner = 0;
      let winnerCandidate = {};

      for (let i = 0; i < candidateNumber; i++) {
          console.log(candidateMember[i])
          if (candidateMember[i].voteCount > maxVoteWinner) {
              maxVoteWinner = candidateMember[i].voteCount;
              winnerCandidate = candidateMember[i];
          }
      }
      setVoteWinner(winnerCandidate);
  };

  useEffect(() => {
    winner();
  }, [candidateMember])
  
  return (
    <>
      {!voteWinner ? (
        <div>아직 우승자 없음...</div>
      ) : (
        <>
          <div>
            당선 !!!!
          </div>
          <div>
              {parseInt(voteWinner.candidateId) + 1} 번
          </div>
          <div>
              이름 = {voteWinner.name}
          </div>
          <div>
              슬로건 = {voteWinner.slogan}
          </div>
          <div>
              투표수 = {voteWinner.voteCount}
          </div>
        </>
      )}
    </>
  );
};

export default Winner;