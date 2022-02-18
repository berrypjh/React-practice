// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 < 0.9.0;

contract VotingTest {
  mapping (string => uint) public candidatesVotedCount;

  constructor () {
    candidatesVotedCount['Park'] = 5;
  }

  function getVotedCount(string memory _name) external view returns (uint) {
    return candidatesVotedCount[_name];
  }
}