// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleUint{
    uint256 public isUint;
    // uint8 public isUint;

    function setUint(uint _isUint) public{
        isUint = _isUint;
    }
}