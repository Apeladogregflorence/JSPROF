const NFTs = [
    {
        name: "H&M",
        size: "M",
        properties: "Cotton",
        color: "White",
        brand: "H&M"
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

mintNFT({name: "Bench", size: "L", properties: "Polyester", color: "Black", brand: "Bench"});
mintNFT({name: "Penshoppe", size: "S", properties: "Cotton", color: "Blue", brand: "Penshoppe"});
mintNFT({name: "Gucci", size: "M", properties: "Silk", color: "Red", brand: "Gucci"});
listNFTs();

getTotalSupply();
