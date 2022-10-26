import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
//abi
import LotteryToken from 'abi/LotteryToken.json';
//wagmi
import { useAccount, useBalance, useNetwork } from 'wagmi';
//cpn
import ButtonCustom from 'common/components/ButtonCustom';
import { useState } from 'react';
//hook
import useContractLottery from 'pages/Home/hooks/useContractLottery';
import { weiToEther } from 'common/utils/convertToken';
import LotteryModalConfirm from './LotteryModalConfirm';
//gif
import btcGif from 'assets/gif/flip-btc.gif';
import ticketGif from 'assets/gif/ticket.gif';
import casinoLottery from 'assets/image/casino-lottery.webp';

import goldCoin from 'assets/svg/gold-coin.svg';
import timeNow from 'common/utils/timeNow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const LotteryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '88px',
}));

const LotteryHead = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '50vh',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#bccaf5',
  borderBottomRightRadius: '10%',
  borderBottomLeftRadius: '10%',
}));

const Lottery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [expand, setExpand] = useState(false);
  const { chain } = useNetwork();
  const { address } = useAccount();
  //Lottery detail
  const { useGetDetail, useGetBetNumberOfPlayer, useGetResult } = useContractLottery();
  const { gameDetail } = useGetDetail();
  const { betNumberOfPlayer } = useGetBetNumberOfPlayer(address);
  const { luckyNumber, winners } = useGetResult();
  const theme = useTheme();

  const { data: balanceLT } = useBalance({
    addressOrName: address,
    token: LotteryToken.address,
  });

  //Modal action
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <LotteryContainer>
      {/* Prizes */}
      <LotteryHead>
        <Box component={'img'} src={btcGif} sx={{ borderRadius: '50%' }}></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" sx={{ marginTop: '88px' }}>
            The Sea Lottery
          </Typography>
          <Typography variant="h1" sx={{ color: 'rgb(255, 178, 55)', fontWeight: '900' }}>
            $120,000
          </Typography>
          <Typography variant="h3">in prizes!</Typography>
        </Box>
        <Box component={'img'} src={btcGif} sx={{ borderRadius: '50%' }}></Box>
      </LotteryHead>

      {/* Game informatin */}
      <Box sx={{ marginTop: '124px' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: '600' }}>
          Buy Ticket Now!
        </Typography>
        <Box
          sx={{
            width: '760px',
            height: '230px',
            marginTop: '42px',
            backgroundColor: '#fff',
            borderTopLeftRadius: theme.shape.borderRadiusLg,
            borderTopRightRadius: theme.shape.borderRadiusLg,
            borderBottom: 'solid 1.2px #d8d5d5',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 40px',
              borderTopLeftRadius: theme.shape.borderRadiusLg,
              borderTopRightRadius: theme.shape.borderRadiusLg,
              backgroundColor: '#f8f8f8',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Current Round
            </Typography>
            <Typography variant="h5">#278 | Round: {timeNow().toDateString()}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '10px 40px',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Price ticket{' '}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 600, color: '#1fad86', marginLeft: '26px' }}>
              10 USDT{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '10px 40px',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Your ticket{' '}
            </Typography>
            {false && (
              <Typography
                variant="h2"
                sx={{ fontWeight: 600, color: '#b3b003', marginLeft: '26px' }}
              >
                12
              </Typography>
            )}
            {false && (
              <Box component={'img'} src={ticketGif} sx={{ width: '65px', height: '65px' }}></Box>
            )}
            <ButtonCustom sx={{ marginLeft: '26px' }}>Buy Ticket</ButtonCustom>
          </Box>
        </Box>
        <Box
          sx={{
            width: '760px',
            height: '250px',
            backgroundColor: '#f8f8f8',
            display: expand ? 'block' : 'none',
          }}
        >
          {' '}
        </Box>
        <Box
          sx={{
            width: '760px',
            height: '64px',
            backgroundColor: '#fff',
            borderBottomLeftRadius: theme.shape.borderRadiusLg,
            borderBottomRightRadius: theme.shape.borderRadiusLg,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{ fontWeight: '600', fontSize: '18px', cursor: 'pointer', position: 'relative' }}
            onClick={() => setExpand(!expand)}
          >
            {expand ? 'Hide' : 'Details'}
            {expand ? (
              <ExpandLessIcon sx={{ position: 'absolute', top: '2px' }}></ExpandLessIcon>
            ) : (
              <ExpandMoreIcon sx={{ position: 'absolute', top: '2px' }}></ExpandMoreIcon>
            )}
          </Box>
        </Box>
      </Box>

      {/* Result */}

      <Box
        sx={{
          height: '500px',
          width: '100%',
          marginTop: '240px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8496cf',
          borderRadius: '0em 10rem',
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: '600', color: '#030640' }}>
          Finished Rounds
        </Typography>
        <Box
          sx={{
            width: '760px',
            height: '230px',
            backgroundColor: '#fff',
            marginTop: '24px',
            borderRadius: theme.shape.borderRadiusLg,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '30px 40px',
              height: '98px',
              borderTopLeftRadius: theme.shape.borderRadiusLg,
              borderTopRightRadius: theme.shape.borderRadiusLg,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Round #277
            </Typography>
          </Box>
          <Divider></Divider>
          <Box sx={{ display: 'flex', padding: '30px 40px' }}>
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Winning ticket
            </Typography>
            <Box sx={{ position: 'relative', marginLeft: '100px' }}>
              <Box component={'img'} src={goldCoin} sx={{ width: '80px', height: '80px' }}></Box>
              <Box
                sx={{
                  fontWeight: '900',
                  position: 'absolute',
                  top: '12%',
                  right: '36%',
                  color: '#fff',
                  fontSize: '40px',
                }}
              >
                1
              </Box>
            </Box>

            <Box sx={{ position: 'relative' }}>
              <Box component={'img'} src={goldCoin} sx={{ width: '80px', height: '80px' }}></Box>
              <Box
                sx={{
                  fontWeight: '900',
                  position: 'absolute',
                  top: '12%',
                  right: '36%',
                  color: '#fff',
                  fontSize: '40px',
                }}
              >
                2
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component={'img'}
        src={casinoLottery}
        sx={{ width: '40%', height: '240px', marginTop: '120px' }}
      ></Box>
    </LotteryContainer>
  );
};

export default Lottery;
