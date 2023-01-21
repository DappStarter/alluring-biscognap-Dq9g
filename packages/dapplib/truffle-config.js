require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture gloom bubble tooth notice crime remain essay inflict bread supply tank'; 
let testAccounts = [
"0x9d0266b3816f9bbe576ffea12c0f474324cdff7ee6076de2aa47324525aeccb8",
"0x911acdbdc696caf711738f4dd734a599285111ae3ca490d8be64ed5374adbeca",
"0x7e1e415787d0b51ceaa8027a97e5944e8c96768e687d590668cacfef853e7749",
"0xdfb6790e53eb4abb99082d4a49d6a328f04e3259441999d9fd24fb01a608ac83",
"0x48b6ba80e8e24f84a1cae0c958698ac0d250da1034f019f21fed1ecb7142f025",
"0x5ec4d1fe413cd6373fd8f113bcb0db4ba15ce6c9a4979e02e6f05c9b333e10ed",
"0x0ae7e5b78a187d1918cafd574eafe7e62c0064bd42db0cfcd896caa033aefeae",
"0x6b1a3cf1e1ffe50a139ed41a4b83a94c8220a4084a2c3d48bf0dec06c09c7853",
"0xce8902fa406cf3b653c3846078b957062dc7e7c40b46dd97b2f92f5606bcd362",
"0x309b367a92fcf4a187ee5303171b9355ea7550054c41d2acbf22f9df277b4d8c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


