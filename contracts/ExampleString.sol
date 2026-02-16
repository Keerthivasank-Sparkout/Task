// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleString{
    string public mystring = "hello world";
    function setString(string memory _mystring) public{
        mystring = _mystring;
    }
    function compareString(string memory _mystring) public view returns(string memory){ 
        if(keccak256(abi.encodePacked(mystring)) == keccak256(abi.encodePacked(_mystring))){
            return mystring;
        }
        else{
            return "sorry not match";
        }
    }
}