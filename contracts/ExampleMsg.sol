// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleMsg{
    address public someAddress;
    
    function setAddress() public{ 
        someAddress = msg.sender;
    }
    
}