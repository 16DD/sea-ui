import { useBalance } from "wagmi";
import { useMemo } from "react";

export interface IStreamBalance {
	userAddress: string;
	tokenAddress: string;
}
const useStreamBalance = (args: IStreamBalance) => {
	const {
		data: balance,
		isError,
		isLoading,
	} = useBalance({
		addressOrName: args.userAddress,
		token: args.tokenAddress,
		watch: true,
		enabled: !!args.userAddress && !!args.tokenAddress,
	});

	return useMemo(() => {
		if (isError || isLoading) {
			return undefined;
		}
		return balance?.formatted;
	}, [isError, isLoading, balance]);
};

export default useStreamBalance;
