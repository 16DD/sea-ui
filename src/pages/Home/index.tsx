import { Box, Button } from '@mui/material';
import useStreamReadContract from 'common/hooks/useStreamReadContract';

import Lottery from 'abi/Lottery.json';
import LotteryToken from 'abi/LotteryToken.json';
import { useAccount } from 'wagmi';
import useWriteContract from 'common/hooks/useWriteContract';
import ButtonCustom from 'common/components/ButtonCustom';

const Home = () => {
  const { address } = useAccount();
  //const result = useStreamReadContract({ contractAddress: Lottery.address, contractAbi: Lottery.abi, functionName: "gameDetail" });
  const { result, isLoading, isSuccess, write } = useWriteContract({
    contractAddress: LotteryToken.address,
    contractAbi: LotteryToken.abi,
    functionName: 'approve',
    args: [address, 100000],
    enabled: true,
  });
  console.log('isLoading:', isLoading, '\nisSuccess:', isSuccess);
  console.log('result: ', result);

  return (
    <>
      <Box>Home page</Box>
      <ButtonCustom variant="contained" sx={{ ml: 1, mt: '88px' }} onClick={() => write?.()}>
        Approve
      </ButtonCustom>
    </>
  );
};

export default Home;
