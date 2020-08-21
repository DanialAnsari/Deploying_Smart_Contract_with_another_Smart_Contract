pragma solidity ^0.6.2;
import "./C.sol";

contract D{
C c;
address[] public contracts;

  // useful to know the row count in contracts index

  function getContractCount() 
    public
    view
    returns(uint contractCount)
  {
    return contracts.length;
  }

  function newContract()
    public
    returns(address newContract)
  {
    c = new C();
    contracts.push(address(c));
    return address(c);
  }

  function useFunction() public view returns(string memory){
      return c.getMessage();
  }
  }