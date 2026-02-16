// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract theBlockchainMessebger{
    address public owner;
    string public theMessage;
    uint public changeCounter;
    
    constructor(){
        owner = msg.sender;
    }
    function updatemessage(string memory _newMessage)public{
        if(owner == msg.sender){
            theMessage = _newMessage;
            changeCounter++;
        }
    }
}