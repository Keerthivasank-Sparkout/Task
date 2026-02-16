// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleConstroctor{
    address public someAddress;

    constructor(address _someAddress){
        someAddress = _someAddress;
    }

    function setAddress(address _someAddress)public{
        someAddress = _someAddress;
    }
    
}