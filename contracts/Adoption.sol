pragma solidity ^0.5.0;

contract Adoption {
  address[16] public adopters;

  // Adopting a pet
  function adopt(uint petId) public returns (uint) {
    require(petId >= 0 && petId <= 15);
    require(adopters[petId] == 0x0000000000000000000000000000000000000000);
    adopters[petId] = msg.sender;

    return petId;
  }

  // Return a pet
  function unadopt(uint petId) public returns (uint) {
    require(petId >= 0 && petId <= 15);
    if (adopters[petId] == msg.sender) {
      adopters[petId] = 0x0000000000000000000000000000000000000000;
    } 
    return petId;
  }

  // Retrieving the adopters
  function getAdopters() public view returns (address[16] memory) {
    return adopters;
  }


}