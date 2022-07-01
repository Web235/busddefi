'use strict';
var abi_contract_bnb = [{
    "constant": !0,
    "inputs": [],
    "name": "PERCENTS_DIVIDER",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserDownlineCount",
    "outputs": [{
        "name": "referrals",
        "type": "uint256[3]"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserDividends",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserAvailable",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "started",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "TIME_STEP",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserReferrer",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !1,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": !1,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserReferralTotalBonus",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "PROJECT_FEE",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "getSiteInfo",
    "outputs": [{
        "name": "_totalInvested",
        "type": "uint256"
    }, {
        "name": "_totalBonus",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "totalInvested",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !1,
    "inputs": [{
        "name": "referrer",
        "type": "address"
    }, {
        "name": "plan",
        "type": "uint8"
    }],
    "name": "invest",
    "outputs": [],
    "payable": !0,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "REFERRAL_PERCENTS",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserInfo",
    "outputs": [{
        "name": "totalDeposit",
        "type": "uint256"
    }, {
        "name": "totalWithdrawn",
        "type": "uint256"
    }, {
        "name": "totalReferrals",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "totalRefBonus",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserReferralWithdrawn",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "getContractBalance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserTotalDeposits",
    "outputs": [{
        "name": "amount",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "MAX_WITHDRAW",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "WITHDRAW_COOLDOWN",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "commissionWallet",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserAmountOfDeposits",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "plan",
        "type": "uint8"
    }],
    "name": "getPlanInfo",
    "outputs": [{
        "name": "time",
        "type": "uint256"
    }, {
        "name": "percent",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "index",
        "type": "uint256"
    }],
    "name": "getUserDepositInfo",
    "outputs": [{
        "name": "plan",
        "type": "uint8"
    }, {
        "name": "percent",
        "type": "uint256"
    }, {
        "name": "amount",
        "type": "uint256"
    }, {
        "name": "start",
        "type": "uint256"
    }, {
        "name": "finish",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserCheckpoint",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "INVEST_MIN_AMOUNT",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserReferralBonus",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserTotalWithdrawn",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getUserTotalReferrals",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "wallet",
        "type": "address"
    }],
    "payable": !1,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !1,
        "name": "user",
        "type": "address"
    }],
    "name": "Newbie",
    "type": "event"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "user",
        "type": "address"
    }, {
        "indexed": !1,
        "name": "plan",
        "type": "uint8"
    }, {
        "indexed": !1,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "NewDeposit",
    "type": "event"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "user",
        "type": "address"
    }, {
        "indexed": !1,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Withdrawn",
    "type": "event"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "referrer",
        "type": "address"
    }, {
        "indexed": !0,
        "name": "referral",
        "type": "address"
    }, {
        "indexed": !0,
        "name": "level",
        "type": "uint256"
    }, {
        "indexed": !1,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "RefBonus",
    "type": "event"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "user",
        "type": "address"
    }, {
        "indexed": !1,
        "name": "totalAmount",
        "type": "uint256"
    }],
    "name": "FeePayed",
    "type": "event"
}];