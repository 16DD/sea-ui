import { Box } from '@mui/material';
import { Navigate, useRoutes } from 'react-router-dom';
import { PATH_HOME, PATH_USER, PATH_TOKEN, PATH_AUCTION, PATH_AIRDROP, PATH_LOTTERY } from './path';

import TokenPage from 'pages/Token';
import LayoutMain from 'common/layout/LayoutMain';
import Lottery from 'pages/Lottery';
import Home from 'pages/Home';

export default function Router() {
  return useRoutes([
    {
      element: <LayoutMain></LayoutMain>,
      children: [
        {
          path: `${PATH_HOME.root}`,
          element: <Home></Home>,
        },
        {
          path: `${PATH_USER.root}`,
          element: <Box sx={{ marginTop: '88px' }}>User info</Box>,
        },
        {
          path: `${PATH_TOKEN.root}`,
          element: <TokenPage></TokenPage>,
        },
        {
          path: `${PATH_AUCTION.root}`,
          children: [
            {
              path: `${PATH_AUCTION.root}`,
              element: <Box>Auction all</Box>,
            },
            {
              path: `${PATH_AUCTION.create}`,
              element: <Box>Create Auction</Box>,
            },
          ],
        },
        {
          path: `${PATH_LOTTERY.root}`,
          element: <Lottery></Lottery>,
        },
        {
          path: `${PATH_AIRDROP.root}`,
          element: <Box>Airdrop</Box>,
        },
        {
          path: '/404',
          element: <Box>Not found</Box>,
        },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
