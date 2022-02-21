var Voting = artifacts.require("Ballot");

module.exports = function (deployer) {
    // 컨트랙트, 제안 슬로건, 
    deployer.deploy(Voting, "?", "??");
};
