require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth muscle congress hover private flip skin'; 
let testAccounts = [
"0x62ea96e7ff458dde035b41b9980cf36941c1670464f475b3dfbb2b7b29269057",
"0xa97b4749ae6645d5793fe7a949257548399147d9512ba5673058de57685cb9a3",
"0xd1451bb4b0837570802ce253c63f4af06633d6c30a6cbeb7b4c70595a68d9e81",
"0xef6614cdbdebe2c9a49c73b8ca351aa367b21f274a2034eecf768b9c1699a7bb",
"0x4368d475ff1518e736b767e8d0020927959476ede0e3716eb4fc75ec5749b15b",
"0xae2ba3213eafa244f38f38e2c7286d0505a650724c942970a43057176d882da1",
"0xd2cc43d8f7215af7df2391e2947804b32b7a0c758bbc9b57fc26cbf7564a05a4",
"0x2aa0659d90c55146d8b7f4ae206cd4e55486c5cd6eee2cd584f5c78c367669bc",
"0x2046457870b43bd303a2f53cc361243eed73453a699d30b61f01f5318eaaf754",
"0xccef60ba44c1e3904358e52ef176e80ee4e6bf844c8701f57e1abb281f548bb0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


