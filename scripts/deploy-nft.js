const hre = require("hardhat");

// Whitelisted contract address
const contractAddress = "0xD67Fe861b0fdFbFDb357f0F20c05085FD7Cd1a34";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Deploy the CryptoDevs Contract
  //   const nftContract = await hre.ethers.deployContract("CryptoDevs", [
  //     contractAddress,
  //   ]);
  const nftContract = await hre.ethers.deployContract("CryptoDevs", [
    contractAddress,
    deployer.address, // Pass msg.sender as the initial owner
  ]);

  // wait for the contract to deploy
  await nftContract.waitForDeployment();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", nftContract.target);

  // Sleep for 30 seconds while Etherscan indexes the new contract deployment
  await sleep(30 * 1000); // 30s = 30 * 1000 milliseconds

  // Verify the contract on etherscan
  await hre.run("verify:verify", {
    address: nftContract.target,
    constructorArguments: [contractAddress, deployer.address],
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/*
NFT Contract Address: 0xf6D7AC5241d34C1F16f50D33a529417eA8578AA8
Successfully submitted source code for contract
contracts/CryptoDevs.sol:CryptoDevs at 0xf6D7AC5241d34C1F16f50D33a529417eA8578AA8
for verification on the block explorer. Waiting for verification result...

Successfully verified contract CryptoDevs on the block explorer.
https://sepolia.etherscan.io/address/0xf6D7AC5241d34C1F16f50D33a529417eA8578AA8#code
*/
