const NFTs = [
    {
        name: "H&M"
    }
];

function mintNFT(nft) {
    NFTs.push(nft);
    return nft;
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
    console.log("------------------");
}

function getTotalSupply() {
    console.log(`Total Supply: ${NFTs.length}`);
    console.log("------------------");
}

// Call your functions below this line

listNFTs();

mintNFT({name: "Bench"});
mintNFT({name: "Penshoppe"});
mintNFT({name: "Gucci"});
listNFTs();

getTotalSupply();
