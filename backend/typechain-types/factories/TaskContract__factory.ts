/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TaskContract, TaskContractInterface } from "../TaskContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "AddTask",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "DeleteTask",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isDone",
        type: "bool",
      },
    ],
    name: "ToggleDone",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "taskText",
        type: "string",
      },
    ],
    name: "addTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clearTasks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "deleteTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyTasks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "taskText",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isImportant",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDone",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDeleted",
            type: "bool",
          },
        ],
        internalType: "struct TaskContract.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "taskId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isDone",
        type: "bool",
      },
    ],
    name: "toggleDone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112e3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063560f31921461005c57806367238562146100785780636e13f81814610094578063943a1a0a146100b2578063db591664146100ce575b600080fd5b610076600480360381019061007191906109b8565b6100d8565b005b610092600480360381019061008d9190610b2b565b6101b7565b005b61009c61032c565b6040516100a99190610d55565b60405180910390f35b6100cc60048036038101906100c79190610da3565b610698565b005b6100d6610779565b005b3373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036101b45760016000828154811061015457610153610de3565b5b906000526020600020906003020160020160026101000a81548160ff0219169083151502179055507f8c2dccd1e8cc953301e21aa9acd0c9c15ed4464a558ed394b00c243d523eb538816040516101ab9190610e21565b60405180910390a15b50565b60008080549050905060006040518060a0016040528083815260200184815260200160001515815260200160001515815260200160001515815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101908161023a9190611048565b5060408201518160020160006101000a81548160ff02191690831515021790555060608201518160020160016101000a81548160ff02191690831515021790555060808201518160020160026101000a81548160ff0219169083151502179055505050336001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1f54e1ba1832d428fbd7e7792beaf62b1fc5a382c207ffd614209c1413e94fda338260405161032092919061115b565b60405180910390a15050565b60606000808054905067ffffffffffffffff81111561034e5761034d610a00565b5b60405190808252806020026020018201604052801561038757816020015b61037461084d565b81526020019060019003908161036c5790505b5090506000805b60008054905081101561059e573373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561043f5750600015156000828154811061041c5761041b610de3565b5b906000526020600020906003020160020160019054906101000a900460ff161515145b1561058b576000818154811061045857610457610de3565b5b90600052602060002090600302016040518060a00160405290816000820154815260200160018201805461048b90610e6b565b80601f01602080910402602001604051908101604052809291908181526020018280546104b790610e6b565b80156105045780601f106104d957610100808354040283529160200191610504565b820191906000526020600020905b8154815290600101906020018083116104e757829003601f168201915b505050505081526020016002820160009054906101000a900460ff161515151581526020016002820160019054906101000a900460ff161515151581526020016002820160029054906101000a900460ff16151515158152505083838151811061057157610570610de3565b5b60200260200101819052508180610587906111b3565b9250505b8080610596906111b3565b91505061038e565b5060008167ffffffffffffffff8111156105bb576105ba610a00565b5b6040519080825280602002602001820160405280156105f457816020015b6105e161084d565b8152602001906001900390816105d95790505b50905060005b8281101561064e5783818151811061061557610614610de3565b5b60200260200101518282815181106106305761062f610de3565b5b60200260200101819052508080610646906111b3565b9150506105fa565b5061068f6040518060400160405280601281526020017f4172726179206c656e67746820697320257300000000000000000000000000008152508251610788565b80935050505090565b3373ffffffffffffffffffffffffffffffffffffffff166001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361077557806000838154811061071357610712610de3565b5b906000526020600020906003020160020160016101000a81548160ff0219169083151502179055507fba663e32a8d8a276cf7b5bd80c06bfc2d343d4a4a4310f7c686e98fff148c42f828260405161076c92919061120a565b60405180910390a15b5050565b6000806107869190610882565b565b610820828260405160240161079e92919061127d565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610824565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6040518060a0016040528060008152602001606081526020016000151581526020016000151581526020016000151581525090565b50805460008255600302906000526020600020908101906108a391906108a6565b50565b5b8082111561090d576000808201600090556001820160006108c89190610911565b6002820160006101000a81549060ff02191690556002820160016101000a81549060ff02191690556002820160026101000a81549060ff0219169055506003016108a7565b5090565b50805461091d90610e6b565b6000825580601f1061092f575061094e565b601f01602090049060005260206000209081019061094d9190610951565b5b50565b5b8082111561096a576000816000905550600101610952565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61099581610982565b81146109a057600080fd5b50565b6000813590506109b28161098c565b92915050565b6000602082840312156109ce576109cd610978565b5b60006109dc848285016109a3565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a38826109ef565b810181811067ffffffffffffffff82111715610a5757610a56610a00565b5b80604052505050565b6000610a6a61096e565b9050610a768282610a2f565b919050565b600067ffffffffffffffff821115610a9657610a95610a00565b5b610a9f826109ef565b9050602081019050919050565b82818337600083830152505050565b6000610ace610ac984610a7b565b610a60565b905082815260208101848484011115610aea57610ae96109ea565b5b610af5848285610aac565b509392505050565b600082601f830112610b1257610b116109e5565b5b8135610b22848260208601610abb565b91505092915050565b600060208284031215610b4157610b40610978565b5b600082013567ffffffffffffffff811115610b5f57610b5e61097d565b5b610b6b84828501610afd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ba981610982565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610be9578082015181840152602081019050610bce565b60008484015250505050565b6000610c0082610baf565b610c0a8185610bba565b9350610c1a818560208601610bcb565b610c23816109ef565b840191505092915050565b60008115159050919050565b610c4381610c2e565b82525050565b600060a083016000830151610c616000860182610ba0565b5060208301518482036020860152610c798282610bf5565b9150506040830151610c8e6040860182610c3a565b506060830151610ca16060860182610c3a565b506080830151610cb46080860182610c3a565b508091505092915050565b6000610ccb8383610c49565b905092915050565b6000602082019050919050565b6000610ceb82610b74565b610cf58185610b7f565b935083602082028501610d0785610b90565b8060005b85811015610d435784840389528151610d248582610cbf565b9450610d2f83610cd3565b925060208a01995050600181019050610d0b565b50829750879550505050505092915050565b60006020820190508181036000830152610d6f8184610ce0565b905092915050565b610d8081610c2e565b8114610d8b57600080fd5b50565b600081359050610d9d81610d77565b92915050565b60008060408385031215610dba57610db9610978565b5b6000610dc8858286016109a3565b9250506020610dd985828601610d8e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b610e1b81610982565b82525050565b6000602082019050610e366000830184610e12565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e8357607f821691505b602082108103610e9657610e95610e3c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610efe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ec1565b610f088683610ec1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610f45610f40610f3b84610982565b610f20565b610982565b9050919050565b6000819050919050565b610f5f83610f2a565b610f73610f6b82610f4c565b848454610ece565b825550505050565b600090565b610f88610f7b565b610f93818484610f56565b505050565b5b81811015610fb757610fac600082610f80565b600181019050610f99565b5050565b601f821115610ffc57610fcd81610e9c565b610fd684610eb1565b81016020851015610fe5578190505b610ff9610ff185610eb1565b830182610f98565b50505b505050565b600082821c905092915050565b600061101f60001984600802611001565b1980831691505092915050565b6000611038838361100e565b9150826002028217905092915050565b61105182610baf565b67ffffffffffffffff81111561106a57611069610a00565b5b6110748254610e6b565b61107f828285610fbb565b600060209050601f8311600181146110b257600084156110a0578287015190505b6110aa858261102c565b865550611112565b601f1984166110c086610e9c565b60005b828110156110e8578489015182556001820191506020850194506020810190506110c3565b868310156111055784890151611101601f89168261100e565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111458261111a565b9050919050565b6111558161113a565b82525050565b6000604082019050611170600083018561114c565b61117d6020830184610e12565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111be82610982565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111f0576111ef611184565b5b600182019050919050565b61120481610c2e565b82525050565b600060408201905061121f6000830185610e12565b61122c60208301846111fb565b9392505050565b600082825260208201905092915050565b600061124f82610baf565b6112598185611233565b9350611269818560208601610bcb565b611272816109ef565b840191505092915050565b600060408201905081810360008301526112978185611244565b90506112a66020830184610e12565b939250505056fea264697066735822122033d73930a4b614f87449a430bc1d010b2b1656240e742ddec094d257b8209d5464736f6c63430008110033";

type TaskContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TaskContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TaskContract__factory extends ContractFactory {
  constructor(...args: TaskContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TaskContract> {
    return super.deploy(overrides || {}) as Promise<TaskContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TaskContract {
    return super.attach(address) as TaskContract;
  }
  override connect(signer: Signer): TaskContract__factory {
    return super.connect(signer) as TaskContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TaskContractInterface {
    return new utils.Interface(_abi) as TaskContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TaskContract {
    return new Contract(address, _abi, signerOrProvider) as TaskContract;
  }
}