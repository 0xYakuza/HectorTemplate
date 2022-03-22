import { Metamask, SolCompiler, log, Status } from "Hector";

const main = async () => {
    let mm = await Metamask.create();
    let wallet = await mm.connect();
    let chainId = await mm.chainId();

    log(null, wallet, chainId);

    const compiler = new SolCompiler({});

    log(null, compiler.getCompilerFullUrl());

    var input = {
        compilerUrl: compiler.getCompilerFullUrl(),
        solConfig: {
            language: 'Solidity',
            sources: {
                'test.sol': {
                    content: 'contract C { function f() public { } }'
                }
            },
            settings: {
                outputSelection: {
                    '*': {
                        '*': ['*']
                    }
                }
            }
        }
    };


    const compiled = await compiler.compile(input);
    log(Status.Success, compiled);
};

window.addEventListener('DOMContentLoaded', main);
