const hre = require("hardhat");

async function main() {
  // Using `hre` - Hardhat Runtime Environment - we find and deploy
  // a contract named `NFTee`
  const nftContract = await hre.ethers.deployContract("NFTee");

  // We wait for the contract to finish deploying
  await nftContract.waitForDeployment();

  // We print the address of the deployed contract to our console
  // console.log("NFT Contract Address:", nftContract.target);
  const txHash = nftContract.deploymentTransaction().hash;
  console.log(
    `nftContract deployed to ${nftContract.target}. Transaction at https://sepolia.etherscan.io/tx/${txHash}`
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// LOCK.sol contract deploy script example
// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();
//   const txHash = lock.deploymentTransaction().hash;

//   console.log(
//     `Lock with ${hre.ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${
//       lock.target
//     }. Transaction at https://sepolia.etherscan.io/tx/${txHash}`
//   );
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
