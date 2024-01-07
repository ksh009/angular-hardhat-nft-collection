const hre = require("hardhat");

// Cur bal => 0.5098 SepoliaETH before remix interaction
/*
  Observations 
  1. If gas fee is > than withdrawal amount then -0 on metamask trx list 
  2. Withdrawal amount was consumed in order to cover gas fee. So, trx fees are deducted from the receive amount
*/

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();
  const txHash = lock.deploymentTransaction().hash;

  console.log(
    `Lock with ${hre.ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${
      lock.target
    }. Transaction at https://sepolia.etherscan.io/tx/${txHash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
