// SPDX-License-Identifier: MIT
pragma solidity 0.8.33;

contract ExampleBoolean{
    bool public isbool;

    function setBool(bool _isbool) public{
        isbool = _isbool;
    }
}
