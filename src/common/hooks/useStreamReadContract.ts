import { useMemo } from 'react';
import { useContractRead } from 'wagmi';

export interface IStreamReadContract {
  contractAddress: string;
  contractAbi: any;
  functionName: string;
  args?: any | any[];
}

const useStreamReadContract = (args: IStreamReadContract) => {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: args.contractAddress,
    contractInterface: args.contractAbi,
    functionName: args.functionName,
    args: args.args,
    watch: true,
  });

  return useMemo(() => {
    if (isError || isLoading) {
      return undefined;
    }
    return data;
  }, [isError, isLoading, data]);
};

export default useStreamReadContract;
