const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log("Lock with 1 ETH deployed to:", lock.address);

   /* these two lines deploy the contract to the network */
   const Vault = await hre.ethers.getContractFactory("Vault");
   const vault = await Vault.deploy("zk vault");
 
   await vault.deployed();
   console.log("Vault Contract deployed to:", vault.address);
 
   /* this code writes the contract addresses to a local */
   /* file named config.js that we can use in the app */
   fs.writeFileSync('./config.js', `
   export const contractAddress = "${vault.address}"
   export const ownerAddress = "${vault.signer.address}"
   `)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
