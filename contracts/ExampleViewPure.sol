// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleViewPure{
    uint public statevarialbe;
    function getData()public view returns(uint){
        return statevarialbe;
    }
    function setDate(uint a,uint b) public pure returns(uint){
        return a+b;
    }
}