import { BigNumber, ethers } from "ethers";

export const weiToEther = (amount: BigNumber) => {
	return ethers.utils.formatEther(amount).toString();
};
