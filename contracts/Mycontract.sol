// SPDX-License-Identifier: MIT

pragma solidity 0.8.33;

contract Mycontract {
     string public ourString = "Hello World and Welcome";

     function UpdateString(string memory _newString) public {
          ourString = _newString;
     }

}   