const {getAddress} = require("@ethersproject/address");

const NETWORK = {
    "mainnet": {
        CHAINID: 1,
        TX_SERVICE_BASE_URL: "https://safe-transaction-mainnet.safe.global",
    },
    "rinkeby": {
        CHAINID: 4,
        TX_SERVICE_BASE_URL: "https://safe-transaction-rinkeby.safe.global",
    },
    "goerli": {
        CHAINID: 5,
        TX_SERVICE_BASE_URL: "https://safe-transaction-goerli.safe.global",
    },
    "xdai": {
        CHAINID: 100,
        TX_SERVICE_BASE_URL: "https://safe-transaction-gnosis-chain.safe.global",
    },
    "matic": {
        CHAINID: 137,
        TX_SERVICE_BASE_URL: "https://safe-transaction-polygon.safe.global",
    },
    "binance": {
        CHAINID: 56,
        TX_SERVICE_BASE_URL: "https://safe-transaction-bsc.safe.global",
    },
    "arbitrum": {
        CHAINID: 42161,
        TX_SERVICE_BASE_URL: "https://safe-transaction-arbitrum.safe.global",
    },
    "fantom": {
        CHAINID: 250,
        TX_SERVICE_BASE_URL: "https://safe-txservice.fantom.network",

    },
    "optimism": {
        CHAINID: 10,
        TX_SERVICE_BASE_URL: "https://safe-transaction-optimism.safe.global",
    }
}

function getSupportedChainID() {
    let chainIDList = [], chainID2Entry = {};
    for (const [key, value] of Object.entries(NETWORK)) {
        chainID2Entry[value.CHAINID] = key;
        chainIDList.push(value.CHAINID);
    }
    return [chainIDList, chainID2Entry];
}

function getTxServiceBaseURL(entry) {
    return NETWORK[entry].TX_SERVICE_BASE_URL;
}

function adjustV(signature) {
    const MIN_VALID_V_VALUE = 27
    let sigV = parseInt(signature.slice(-2), 16);
    if (sigV < MIN_VALID_V_VALUE) {
        sigV += MIN_VALID_V_VALUE
    }
    return signature.slice(0, -2) + sigV.toString(16)
}

function getChecksumAddress(address) {
    return getAddress(address.toLowerCase())
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reloadPage(chainId) {
    window.location.reload();
}

export default {getSupportedChainID, getTxServiceBaseURL, adjustV, getChecksumAddress, capitalizeFirstLetter, reloadPage};
