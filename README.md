## How to Create your NFT and an NFT Minting Site

## Getting Started

In this guide, I'll show you how to build and deploy a ERC-721 NFT collection using Solidity.

By the end,you'll have a contract deployed onto the Polygon mumbai test network wher you can mint new NFTs via our minting site.

You can access the full source code for this project in this repository.

Let's get started:

### Creating A Smart Contract

To create a new smart contract, we can use the following command from the CLI:

```bash
npx thirdweb create --contract
```

This command runs an interactive setup process for us to get started. Give your project a name, select `Hardhat` for the framework, and finally choose the `ERC721Base` contract to get started with.

![Alt image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660286783799/0ll5amhAi.png)

Once your project has been initialized, change directories into the newly created project and open it in your text editor!

```bash
cd my-awesome-nft         # the name of your project
```

## ERC721 CODE

```bash
    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";

contract Contract is ERC721Base {

      constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    )
        ERC721Base(
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {}

}
```
you can also get the solidity file: [here](https://github.com/BernardOnuh/myawesomenfts/blob/main/contracts/nfttest.sol)
Copy and paste this in your contract file save it with the extention `.sol`

## Deploy Smart Contract

Now lets deploy our Smart Contract to the blockchain

```bash
yarn deploy
# or
npx deploy latest
```
your contract would be sent to IPFS where we would get it back with Thirdweb and deploy it to the blockchain.

![Alt image2](https://cdn.hashnode.com/res/hashnode/image/upload/v1659940293615/TY91k9izf.png)

copy the link in blue

This is my link [here](https://thirdweb.com/mumbai/0x78A7a9301aD93047bC7Bb527c9dd5f3deb9f98AE/code)

Go ahead and Click the URL or Copy and paste on your browser

Here  you will you'll fill in the constructors which are

- Project Name
- Royalty address
- Royalty Percentage

Select the chain you would like to use, I will advice first try it on a test network e.g
- Sepolia
- Mumbai
- Arbitrum Goerli
- Note Goerli ETH isn't working functionally now.

![Alt image3](https://cdn.hashnode.com/res/hashnode/image/upload/v1659940689686/s3sAYjzz0.png)


After Deploying your contract and adding to dashboard we can now to add our Metadata,Upload our NFTs and Interact with our Smart Contract.

Head over to **SOURCE** and fill in detais and metadata of your NFTs.
![Alt image4](https://cdn.hashnode.com/res/hashnode/image/upload/v1660287789359/wehQlrOtl.png)

after you are done you should have something like this: [here](https://thirdweb.com/mumbai/0x78A7a9301aD93047bC7Bb527c9dd5f3deb9f98AE/code)
[](https://thirdweb.com/mumbai/0x78A7a9301aD93047bC7Bb527c9dd5f3deb9f98AE/code)

Head over to **EXPLORER** you'll find the functions on the contract the write and read contract. 
**Take the following step**
- Click on Write
- Then on mintTo
- *tokenURI* upload image to IPFS
- Copy the link

## Building Our Minting Site
Let's tale it to next level and build our minting site!

To do so head back to the CLI and run the following command:
```bash
npx thirdweb create
```

This time, we're going to create an App (using Next.js and TypeScript), rather than a Contract as we did the first time, so select App, and the frameworks you are comfortable building with.

![Alt image5](https://cdn.hashnode.com/res/hashnode/image/upload/v1659942840746/zPB5LLgBG.png)

Once again let's change directories into this new project and open it up in our text editor:

```bash
cd my-app
```
Firstly, let's change the `desiredChainId` to be Goerli (the network we deployed our contract to) inside the `_app.tsx` file:

```bash
    // This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;
```
continue by replacing your Contract address[here](https://github.com/BernardOnuh/myawesomenfts/blob/main/frontend/pages/mint.tsx)

You can clone this repository for easy usage

If you are done 

```bash 
npm run dev
```
You'll see your your minting site on your local host