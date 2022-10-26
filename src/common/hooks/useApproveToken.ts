import LotteryToken from 'abi/LotteryToken.json';
import { BigNumber } from 'ethers';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

export interface IApproveToken {
  tokenAddress: string;
  spender: string | undefined;
  amount: BigNumber;
}
const useApproveToken = (args: IApproveToken) => {
  const { config: configApprove } = usePrepareContractWrite({
    addressOrName: args.tokenAddress,
    contractInterface: LotteryToken.abi,
    functionName: 'approve',
    args: [args.spender, args.amount],
  });
  const { data, write } = useContractWrite(configApprove);
  const writeApprove = () => write?.();
  const {
    data: resultApprove,
    isSuccess: isSuccessApprove,
    isLoading: isLoadingApprove,
  } = useWaitForTransaction({
    hash: data?.hash,
  });
  return { resultApprove, isLoadingApprove, isSuccessApprove, writeApprove };
};

export default useApproveToken;
