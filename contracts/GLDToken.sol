// SPDX-License-Identifier: MIT
pragma solidity 0.7.5; //>=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract GLDToken is ERC20  {

    constructor(uint256 initialSupply) ERC20("StarDucks Capu-Token", "SCT")  {
            _mint(msg.sender, initialSupply);
            _setupDecimals(0);
    }

   

}

