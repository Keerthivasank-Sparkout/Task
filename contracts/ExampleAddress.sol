// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleAddress{
    address public someAddress;
    
    function setAddress(address _someAddress) public{ 
        someAddress = _someAddress;
    }
    function getAddress() public view returns (uint){
        return someAddress.balance;
    }
}
