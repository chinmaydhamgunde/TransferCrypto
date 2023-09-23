const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const transactionContract = await hre.ethers.deployContract("Transactions");

  await transactionContract.waitForDeployment();

  console.log("Transactions Contract Address : ", transactionContract.target);

  await sleep(30 * 1000);

  await hre.run("verify:verify", {
    address: transactionContract.target,
    // constructorArguments: "",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
