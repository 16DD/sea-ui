import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

export interface IWriteContract {
  contractAddress: string;
  contractAbi: any;
  functionName: string;
  args?: any | any[];
  enabled: boolean;
}

const useWriteContract = (args: IWriteContract) => {
  const { config } = usePrepareContractWrite({
    addressOrName: args.contractAddress,
    contractInterface: args.contractAbi,
    functionName: args.functionName,
    args: args.args,
    enabled: args.enabled,
  });
  const { data, write } = useContractWrite(config);
  //const writeJoinGame = () => write?.();
  const {
    data: result,
    isSuccess,
    isLoading,
  } = useWaitForTransaction({
    hash: data?.hash,
  });
  return { result, isLoading, isSuccess, write };
};

export default useWriteContract;
