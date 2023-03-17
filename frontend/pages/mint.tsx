import { ConnectWallet,useContract, useContractWrite, Web3Button, useAddress } from '@thirdweb-dev/react'

const Mint = () =>{
    const address = useAddress();
    const contractAddress = '0x78A7a9301aD93047bC7Bb527c9dd5f3deb9f98AE';
    const { contract } = useContract( contractAddress);
    const tokenURI = 'https://ipfs.thirdwebcdn.com/ipfs/QmTp9jukXXncZ6qzGEtjP5NCLWk7yDeqoraNbC1AoPtxv6/nfts.jpg';
    const { mutateAsync, isLoading } = useContractWrite(contract, "mintTo",)

return (
    <Web3Button
    contractAddress={contractAddress}
    action = {() =>mutateAsync([address,tokenURI])}>
    Mint</Web3Button>
)
}

export default Mint;