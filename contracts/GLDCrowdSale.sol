pragma solidity 0.7.5;

import "./Crowdsale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GLDCrowdSale is Crowdsale {

     constructor(
         uint256 rate,
         address payable wallet,
         IERC20 token) 

        Crowdsale(rate, wallet, token) {

        

     }

}