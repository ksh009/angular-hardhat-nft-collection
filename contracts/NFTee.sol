// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// Import the openzepplin contracts
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTee is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract NFTee is ERC721 {
    constructor() ERC721("NFTee", "ITM") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}

/*
    Deployed contract deets Deets 

    nftContract deployed to 0x2FB725ED537c97e14125b5b753d7f763A691cf11. Transaction at https://sepolia.etherscan.io/tx/0x342ffa6166706a8e712ac8b8351431a8125275fba85efeebbc900efd6a3a1d01
*/
