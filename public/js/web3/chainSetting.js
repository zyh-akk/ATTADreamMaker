// 定义ABI
var c_ERC20_abi = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
          }
      ],
      "name": "decreaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
          }
      ],
      "name": "increaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

var c_ERC721_abi = [
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "Approval",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
      }
  ],
  "name": "ApprovalForAll",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "Transfer",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "string",
          "name": "_value",
          "type": "string"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "URI",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "WEIGHT",
  "type": "event"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      },
      {
          "internalType": "address[]",
          "name": "_to",
          "type": "address[]"
      },
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      }
  ],
  "name": "safeBatchMint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "_to",
          "type": "address"
      },
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      }
  ],
  "name": "safeMint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      },
      {
          "internalType": "address[]",
          "name": "_to",
          "type": "address[]"
      },
      {
          "internalType": "string[]",
          "name": "_uri",
          "type": "string[]"
      }
  ],
  "name": "safeMultipleBatchMint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
      }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
      }
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      },
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      }
  ],
  "name": "setBatchURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_weight",
          "type": "uint256"
      },
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      }
  ],
  "name": "setBatchWeight",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string[]",
          "name": "_uri",
          "type": "string[]"
      },
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      }
  ],
  "name": "setMultipleBatchURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      },
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "setURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_weight",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "setWeight",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "name_",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "owner",
          "type": "address"
      }
  ],
  "name": "balanceOf",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "getApproved",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "owner",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "operator",
          "type": "address"
      }
  ],
  "name": "isApprovedForAll",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "name",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "ownerOf",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
      }
  ],
  "name": "supportsInterface",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "symbol",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "tokenURI",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "tokenUris",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "weight",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "weights",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_from",
          "type": "address"
      },
      {
          "internalType": "address[]",
          "name": "_to",
          "type": "address[]"
      },
      {
          "internalType": "uint256[]",
          "name": "_tokenId",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
];

var c_ERC1155_abi = [
{
  "anonymous":false,
  "inputs":[
      {
          "indexed":true,
          "internalType":"address",
          "name":"_owner",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"_operator",
          "type":"address"
      },
      {
          "indexed":false,
          "internalType":"bool",
          "name":"_approved",
          "type":"bool"
      }
  ],
  "name":"ApprovalForAll",
  "type":"event"
},
{
  "anonymous":false,
  "inputs":[
      {
          "indexed":true,
          "internalType":"address",
          "name":"previousOwner",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"newOwner",
          "type":"address"
      }
  ],
  "name":"OwnershipTransferred",
  "type":"event"
},
{
  "anonymous":false,
  "inputs":[
      {
          "indexed":true,
          "internalType":"address",
          "name":"_operator",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"_from",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"_to",
          "type":"address"
      },
      {
          "indexed":false,
          "internalType":"uint256[]",
          "name":"_ids",
          "type":"uint256[]"
      },
      {
          "indexed":false,
          "internalType":"uint256[]",
          "name":"_values",
          "type":"uint256[]"
      }
  ],
  "name":"TransferBatch",
  "type":"event"
},
{
  "anonymous":false,
  "inputs":[
      {
          "indexed":true,
          "internalType":"address",
          "name":"_operator",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"_from",
          "type":"address"
      },
      {
          "indexed":true,
          "internalType":"address",
          "name":"_to",
          "type":"address"
      },
      {
          "indexed":false,
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      },
      {
          "indexed":false,
          "internalType":"uint256",
          "name":"_value",
          "type":"uint256"
      }
  ],
  "name":"TransferSingle",
  "type":"event"
},
{
  "anonymous":false,
  "inputs":[
      {
          "indexed":false,
          "internalType":"string",
          "name":"_value",
          "type":"string"
      },
      {
          "indexed":true,
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      }
  ],
  "name":"URI",
  "type":"event"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"_owner",
          "type":"address"
      },
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      }
  ],
  "name":"balanceOf",
  "outputs":[
      {
          "internalType":"uint256",
          "name":"",
          "type":"uint256"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address[]",
          "name":"_owners",
          "type":"address[]"
      },
      {
          "internalType":"uint256[]",
          "name":"_ids",
          "type":"uint256[]"
      }
  ],
  "name":"balanceOfBatch",
  "outputs":[
      {
          "internalType":"uint256[]",
          "name":"",
          "type":"uint256[]"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"_initialSupply",
          "type":"uint256"
      },
      {
          "internalType":"string",
          "name":"_uri",
          "type":"string"
      }
  ],
  "name":"create",
  "outputs":[
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      }
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"",
          "type":"uint256"
      }
  ],
  "name":"creators",
  "outputs":[
      {
          "internalType":"address",
          "name":"",
          "type":"address"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"_owner",
          "type":"address"
      },
      {
          "internalType":"address",
          "name":"_operator",
          "type":"address"
      }
  ],
  "name":"isApprovedForAll",
  "outputs":[
      {
          "internalType":"bool",
          "name":"",
          "type":"bool"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      },
      {
          "internalType":"address[]",
          "name":"_to",
          "type":"address[]"
      },
      {
          "internalType":"uint256[]",
          "name":"_quantities",
          "type":"uint256[]"
      }
  ],
  "name":"mint",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      },
      {
          "internalType":"address",
          "name":"_to",
          "type":"address"
      },
      {
          "internalType":"uint256",
          "name":"_quantities",
          "type":"uint256"
      }
  ],
  "name":"mintSingle",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
  ],
  "name":"nonce",
  "outputs":[
      {
          "internalType":"uint256",
          "name":"",
          "type":"uint256"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
  ],
  "name":"owner",
  "outputs":[
      {
          "internalType":"address",
          "name":"",
          "type":"address"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
  ],
  "name":"renounceOwnership",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"_from",
          "type":"address"
      },
      {
          "internalType":"address",
          "name":"_to",
          "type":"address"
      },
      {
          "internalType":"uint256[]",
          "name":"_ids",
          "type":"uint256[]"
      },
      {
          "internalType":"uint256[]",
          "name":"_values",
          "type":"uint256[]"
      },
      {
          "internalType":"bytes",
          "name":"_data",
          "type":"bytes"
      }
  ],
  "name":"safeBatchTransferFrom",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"_from",
          "type":"address"
      },
      {
          "internalType":"address",
          "name":"_to",
          "type":"address"
      },
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      },
      {
          "internalType":"uint256",
          "name":"_value",
          "type":"uint256"
      },
      {
          "internalType":"bytes",
          "name":"_data",
          "type":"bytes"
      }
  ],
  "name":"safeTransferFrom",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"_operator",
          "type":"address"
      },
      {
          "internalType":"bool",
          "name":"_approved",
          "type":"bool"
      }
  ],
  "name":"setApprovalForAll",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"string",
          "name":"_uri",
          "type":"string"
      },
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      }
  ],
  "name":"setURI",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"bytes4",
          "name":"_interfaceId",
          "type":"bytes4"
      }
  ],
  "name":"supportsInterface",
  "outputs":[
      {
          "internalType":"bool",
          "name":"",
          "type":"bool"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"",
          "type":"uint256"
      }
  ],
  "name":"tokenUris",
  "outputs":[
      {
          "internalType":"string",
          "name":"",
          "type":"string"
      }
  ],
  "stateMutability":"view",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"address",
          "name":"newOwner",
          "type":"address"
      }
  ],
  "name":"transferOwnership",
  "outputs":[
  ],
  "stateMutability":"nonpayable",
  "type":"function"
},
{
  "inputs":[
      {
          "internalType":"uint256",
          "name":"_id",
          "type":"uint256"
      }
  ],
  "name":"uri",
  "outputs":[
      {
          "internalType":"string",
          "name":"uri",
          "type":"string"
      }
  ],
  "stateMutability":"view",
  "type":"function"
}

];

var c_auction_abi = [
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      }
  ],
  "name": "Ask",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      }
  ],
  "name": "Bid",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "CancelBidToken",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "CancelSellToken",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
      }
  ],
  "name": "Paused",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      }
  ],
  "name": "Trade",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
      }
  ],
  "name": "Unpaused",
  "type": "event"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
      }
  ],
  "name": "bidToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "cancelAllbids",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "cancelBidToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "cancelSellToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      },
      {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
      }
  ],
  "name": "onERC721Received",
  "outputs": [
      {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_startTime",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minLastPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_callBackPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_forceClosePeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_startPrice",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minimumBidGap",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minimumBidPercent",
          "type": "uint256"
      }
  ],
  "name": "readyToSellToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_startTime",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minLastPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_callBackPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_forceClosePeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_startPrice",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minimumBidGap",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_minimumBidPercent",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "_to",
          "type": "address"
      }
  ],
  "name": "readyToSellTokenTo",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "sellTokenToHighest",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_nftAddress",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "_quoteErc20Address",
          "type": "address"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "_auctions",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "minLastPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "callBackPeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "forceClosePeriod",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "startPrice",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "minimumBidGap",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "minimumBidPercent",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "tokenTopBid",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "tokenTopBidder",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "tokenLastBidTime",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "auctionOpenBid",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAskLength",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getAsks",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "page",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
      }
  ],
  "name": "getAsksByPage",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      }
  ],
  "name": "getAsksByUser",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getAuctionHighestBid",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "bidder",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getBids",
  "outputs": [
      {
          "components": [
              {
                  "internalType": "address",
                  "name": "bidder",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
              }
          ],
          "internalType": "struct BidNFT.BidEntry[]",
          "name": "",
          "type": "tuple[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getBidsLength",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getNextMinimalBid",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "user",
          "type": "address"
      }
  ],
  "name": "getUserBids",
  "outputs": [
      {
          "components": [
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
              }
          ],
          "internalType": "struct BidNFT.UserBidEntry[]",
          "name": "",
          "type": "tuple[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "nft",
  "outputs": [
      {
          "internalType": "contract IERC721",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "paused",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "quoteErc20",
  "outputs": [
      {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
}
];

var c_vendingMachine_abi = [
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_nftAddress",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "_quoteErc20Address",
          "type": "address"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      }
  ],
  "name": "Buy",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      }
  ],
  "name": "CancelSell",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
      }
  ],
  "name": "Sell",
  "type": "event"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "name": "_commodityPrices",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getOnSellToken",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getOnSellTokenInfo",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      },
      {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getPrice",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "getSeller",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "nft",
  "outputs": [
      {
          "internalType": "contract IERC721",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      },
      {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
      }
  ],
  "name": "onERC721Received",
  "outputs": [
      {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
      }
  ],
  "name": "queryMaxTokenId",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
      }
  ],
  "name": "queryMinTokenId",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "quoteErc20",
  "outputs": [
      {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchBuyToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
      },
      {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchBuyTokenFor",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchCancelListToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
      }
  ],
  "name": "safeBatchListToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "safeBuyToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "safeBuyTokenFor",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      }
  ],
  "name": "safeCancelListToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
      }
  ],
  "name": "safeListToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "_prices",
          "type": "uint256[]"
      }
  ],
  "name": "safeMultipleBatchListToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}
]





// 设置
var c_atta_ERC1155_Airdrop_abi = [
{
  "inputs": [
      {
          "internalType": "string",
          "name": "name_",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
      },
      {
          "internalType": "string",
          "name": "uri_",
          "type": "string"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
      }
  ],
  "name": "ApprovalForAll",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
      },
      {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
      }
  ],
  "name": "TransferBatch",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
      }
  ],
  "name": "TransferSingle",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
      },
      {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      }
  ],
  "name": "URI",
  "type": "event"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "account",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      }
  ],
  "name": "balanceOf",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
      },
      {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
      }
  ],
  "name": "balanceOfBatch",
  "outputs": [
      {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      },
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      }
  ],
  "name": "batchSetTokenUri",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      }
  ],
  "name": "burn",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }
  ],
  "name": "burnBatch",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
      },
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      }
  ],
  "name": "create",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
      },
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      }
  ],
  "name": "createTo",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "account",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "operator",
          "type": "address"
      }
  ],
  "name": "isApprovedForAll",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "name",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [
      {
          "internalType": "address",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_to",
          "type": "address"
      },
      {
          "internalType": "uint256[]",
          "name": "_id",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "_quantities",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchMint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      },
      {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
      }
  ],
  "name": "safeBatchTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      }
  ],
  "name": "safeBatchTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "_to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_quantities",
          "type": "uint256"
      }
  ],
  "name": "safeMint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "from",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "to",
          "type": "address"
      },
      {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
      },
      {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
      }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "operator",
          "type": "address"
      },
      {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
      }
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
      },
      {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
      }
  ],
  "name": "setTokenUri",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "string",
          "name": "newuri",
          "type": "string"
      }
  ],
  "name": "setUri",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "bytes4",
          "name": "_interfaceId",
          "type": "bytes4"
      }
  ],
  "name": "supportsInterface",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "symbol",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
      }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
      }
  ],
  "name": "uri",
  "outputs": [
      {
          "internalType": "string",
          "name": "",
          "type": "string"
      }
  ],
  "stateMutability": "view",
  "type": "function"
}
]
var c_atta_ERC1155_Airdrop_MerkleProof_abi = [
{
  "anonymous": false,
  "inputs": [
      {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      },
      {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
      }
  ],
  "name": "Claimed",
  "type": "event"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      },
      {
          "internalType": "address",
          "name": "account",
          "type": "address"
      },
      {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
      },
      {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
      },
      {
          "internalType": "bytes32[]",
          "name": "merkleProof",
          "type": "bytes32[]"
      }
  ],
  "name": "claim",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
      {
          "internalType": "address",
          "name": "token_",
          "type": "address"
      },
      {
          "internalType": "address",
          "name": "vault_",
          "type": "address"
      },
      {
          "internalType": "bytes32",
          "name": "merkleRoot_",
          "type": "bytes32"
      }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "inputs": [
      {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
      }
  ],
  "name": "isClaimed",
  "outputs": [
      {
          "internalType": "bool",
          "name": "",
          "type": "bool"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "merkleRoot",
  "outputs": [
      {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
      }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "nft",
  "outputs": [
      {
          "internalType": "contract IERC1155",
          "name": "",
          "type": "address"
      }
  ],
  "stateMutability": "view",
  "type": "function"
}
]












var RPCSetting =
        {
            1:     // 以太坊 正式 主网络
                {
                    'CHAIN_NAME': 'ETH_MAINNET',
                    'RPC_URL': "https://mainnet.infura.io/v3/675a2550ac6f4006b7e60def6ad44923",
                    'CHAIN_ID': 1,
                    'CHAIN_ID_HEX': '0x1',
                    'SYMBOL': 'ETH',
                    'ETHERSCAN_URL': 'https://etherscan.io'
                },
            3:     //  以太坊 ROPSTEN 测试 网络
                {
                    'CHAIN_NAME': 'ETH_ROPSTEN',
                    'RPC_URL': "https://ropsten.infura.io/v3/675a2550ac6f4006b7e60def6ad44923",
                    'CHAIN_ID': 3,
                    'CHAIN_ID_HEX': '0x3',
                    'SYMBOL': 'ETH',
                    'ETHERSCAN_URL': 'https://ropsten.etherscan.io'
                },
            4:     //  以太坊 RINKEBY 测试 网络
                {
                    'CHAIN_NAME': 'ETH_RINKEBY',
                    'RPC_URL': "https://rinkeby.infura.io/v3/675a2550ac6f4006b7e60def6ad44923",
                    'CHAIN_ID': 4,
                    'CHAIN_ID_HEX': '0x4',
                    'SYMBOL': 'ETH',
                    'ETHERSCAN_URL': 'https://rinkeby.etherscan.io'
                },
            56:     //  BSC 正式 主网络
                {
                    'CHAIN_NAME': 'BSC_MAINNET',
                    'RPC_URL': "https://bsc-dataseed1.ninicoin.io",
                    'CHAIN_ID': 56,
                    'CHAIN_ID_HEX': '0x38',
                    'SYMBOL': 'BNB',
                    'ETHERSCAN_URL': 'https://bscscan.com'
                },
            97:     //  BSC 测试 网络
                {
                    'CHAIN_NAME': 'BSC_TESTNET',
                    'RPC_URL': "https://data-seed-prebsc-1-s2.binance.org:8545/",
                    'CHAIN_ID': 97,
                    'CHAIN_ID_HEX': '0x61',
                    'SYMBOL': 'BNB',
                    'ETHERSCAN_URL': 'https://testnet.bscscan.com'
                },
            128:    //  火币HECO 正式 网络
                {
                    'CHAIN_NAME': 'HECO_MAINNET',
                    'RPC_URL': "https://http-mainnet-node.huobichain.com",
                    'CHAIN_ID': 128,
                    'CHAIN_ID_HEX': '0x80',
                    'SYMBOL': 'HT',
                    'ETHERSCAN_URL': 'https://scan.hecochain.com'
                },
            256:    //  火币HECO 测试 网络
                {
                    'CHAIN_NAME': 'HECO_TESTNET',
                    'RPC_URL': "https://http-testnet.hecochain.com",
                    'CHAIN_ID': 256,
                    'CHAIN_ID_HEX': '0x100',
                    'SYMBOL': 'HT',
                    'ETHERSCAN_URL': 'https://scan-testnet.hecochain.com'
                },

        }

c_auction = {
    'proxy': '',
    'abi': c_auction_abi,
    97:  //  BSC 测试 网络
        {
            'address': '0x6A2E6042DF6FDCdA84A45531C892b644b095E2b4'
        },
    56:  //  BSC 正式 主网络
        {
            'address': '0x26455c075eAD85015cbA283731db78d5E80615fF',
        }
};

c_ERC20_BUSD = {
    'proxy': '',
    'abi': c_ERC20_abi,
    97:  //  BSC 测试 网络
        {
            'decimals': 18,
            'address': '0x65aF2dcE9694393496EE7568eeE92660116D5ae6',
        },
    56:  //  BSC 正式 主网络
        {
            'decimals': 18,
            'address': '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        }
};

var contractSetting = {
    'auction_contract': {
        'proxy': '',
        'interfaceType': '',
        'abi': c_auction_abi,
        97:  //  BSC 测试 网络
            {
                'address': '0x6A2E6042DF6FDCdA84A45531C892b644b095E2b4'
            },
        56:  //  BSC 正式 主网络
            {
                'address': '0x26455c075eAD85015cbA283731db78d5E80615fF',
            }
    },
    'busd_ERC20': {
        'proxy': '',
        'interfaceType': 'ERC20',
        'abi': c_ERC20_abi,
        97:  //  BSC 测试 网络
            {
                'symbol': 'BUSD',
                'decimals': 18,
                'address': '0x65aF2dcE9694393496EE7568eeE92660116D5ae6',
            },
        56:  //  BSC 正式 主网络
            {
                'symbol': 'BUSD',
                'decimals': 18,
                'address': '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            }
    },
    'atta_ERC721': {
        'proxy': '',
        'abi': c_ERC721_abi,
        56:
            {
                'owner_id': 17,
                'address': '0x2400714597e7B850e31e09eC71f0A1e48780d4f2'
            },
        97:
            {
                'owner_id': 1,
                'address': '0x790575dcE4E68e5e3c4508DB0293EE2A9ab890a7'
            },

    },
    'vending_machine': {
        'proxy': '',
        'abi': c_vendingMachine_abi,
        56:
            {
                'owner_id': '',
                'address': ''
            },
        97:
            {
                'owner_id': 1,
                'address': '0x5dE6ed56ED3Eba9769e3768F31966634386F18B1'
            },
    },
    'atta_ERC1155_Airdrop' : {
        'proxy': '',
        'abi': c_atta_ERC1155_Airdrop_abi,
        56:
            {
                "owner_id": 22,
                "address": "0x777A1530ce62B144e083d4a7595F47c99A290A48"
            },
        97:
            {
                'owner_id': 1,
                'address': '0xD752fc21081f154cC7d34f08aA57929A6f18B1Fe'
            }
    },

    'atta_ERC1155_Airdrop_MerkleProof' : {
        'proxy': '',
        'abi': c_atta_ERC1155_Airdrop_MerkleProof_abi,
        56:
            {
                "owner_id": 22,
                "address": "0x659fa585E00D53a2D07eFE311B193B3474406d2F"
            },
        97:
            {
                'owner_id': 1,
                'address': '0xFe27452f8639Ad0B41D99E919C80B601A42D6880'
            }
    },
}


