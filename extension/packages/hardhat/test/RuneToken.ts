import { expect } from "chai";
import { ethers } from "hardhat";
import { RuneToken } from "../typechain-types";

describe("RuneToken", function () {
  // We define a fixture to reuse the same setup in every test.

  let runeToken: RuneToken;
  before(async () => {
    const [owner] = await ethers.getSigners();
    const runeTokenFactory = await ethers.getContractFactory("RuneToken");
    runeToken = (await runeTokenFactory.deploy(owner.address)) as RuneToken;
    await runeToken.waitForDeployment();
  });

  describe("Deployment", function () {});
});
