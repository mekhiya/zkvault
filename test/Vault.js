const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Vault", async function () {
  it("Should create a post", async function () {
    const Vault = await ethers.getContractFactory("Vault")
    const vault = await Vault.deploy("zk Vault")
    await vault.deployed()
    await vault.createPost("My first post", "12345")

    const posts = await vault.fetchPosts()
    expect(posts[0].title).to.equal("My first post")
  })

  it("Should edit a post", async function () {
    const Vault = await ethers.getContractFactory("Vault")
    const vault = await Vault.deploy("My zk vault")
    await vault.deployed()
    await vault.createPost("My Second post", "12345")

    await vault.updatePost(1, "My updated post", "23456", true)

    posts = await vault.fetchPosts()
    expect(posts[0].title).to.equal("My updated post")
  })

  it("Should add update the name", async function () {
    const Vault = await ethers.getContractFactory("Vault")
    const vault = await Vault.deploy("My zk vault")
    await vault.deployed()

    expect(await vault.name()).to.equal("My zk vault")
    await vault.updateName('My new vault')
    expect(await vault.name()).to.equal("My new vault")
  })
})
