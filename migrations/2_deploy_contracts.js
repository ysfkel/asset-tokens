var MyToken = artifacts.require("GLDToken.sol")

module.exports = async function(deployer) {
    await deployer.deploy(MyToken, 1000000)
}