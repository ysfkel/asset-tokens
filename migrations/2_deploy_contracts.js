var GLDToken = artifacts.require("GLDToken.sol")
const GLDCrowdSale = artifacts.require("GLDCrowdSale.sol")
require("dotenv").config({path: "../.env"}) 

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(GLDToken, INITIAL_TOKENS)
    await deployer.deploy(GLDCrowdSale, 1, addr[0], GLDToken.address)
    let instance = await GLDToken.deployed();
        // transfer all tokens to GLDCrowdSale contract
    await instance.transfer(GLDCrowdSale.address, INITIAL_TOKENS)
}