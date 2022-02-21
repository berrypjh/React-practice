// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

// CHS
contract Ballot{
    // uint256 candidateCount
    uint256 candidateCount;

    // uint256 voterCount
    uint256 voterCount;

    address public ballotOfficialAddress;
    string public ballotOfficialName;
    string public proposal;

    // VARIABLES
    // struct Voter { address voterAddress; bool hasVoted; }
    struct Voter {
        address voterAddress;
        bool hasVoted;
    }

    // struct Candidate { uint256 candidateId; string name; uint256 voteCount; }
    struct Candidate {
        uint256 candidateId;
        string name;
        uint256 voteCount;
    }

    // enum State { Created, Voting, Ended }
    enum State { 
        Created,
        Voting,
        Ended
    }
    State public state;

    // mapping (uint256 => Candidate) candidateDetails;
    mapping(uint256 => Candidate) private candidateDetails;
    
    // mapping (address=>bool) hasVoted;
    /* mapping (address => bool) public hasVoted; */

    /* MODIFIERS */
    // modifier onlyCandidater()
    modifier onlyCandidater(){
        require(msg.sender == ballotOfficialAddress);
        _;
    }

    // modifier inState()
    // modifier inState(State _state){
    //     require(state == _state);
    //     _;
    // }

    /* FUNCTIONS */

    // constructor()
    constructor(
        string memory _ballotOfficialName,
        string memory _proposal
    )
    public
    {
        ballotOfficialAddress = msg.sender;
        ballotOfficialName = _ballotOfficialName;
        proposal = _proposal;

        state = State.Created;
    }

    // addCandidate()
    function addCandidate(string memory _name) public {
        Candidate memory newCandidate =
        Candidate({
            candidateId: candidateCount,
            name: _name,
            voteCount: 0
        });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    // getCandidateNumber()
    function getCandidateNumber() public view returns (uint256) {
        return candidateCount;
    }

    // Vote()
    
    // endVote()
}