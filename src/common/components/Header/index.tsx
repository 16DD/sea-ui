//mui
import { styled, Box, Typography, Slide, useScrollTrigger } from '@mui/material';

//icon
import iconLight from 'assets/svg/logo-light.svg';
import iconDark from 'assets/svg/logo-dark.svg';
import iconSun from 'assets/svg/icon-sun.svg';
import iconMoon from 'assets/svg/icon-moon.svg';

//action and select
import { changeTheme, selectTheme } from 'store/slices/themeSlices';

//state
import { useDispatch, useSelector } from 'react-redux';
import WalletButton from './components/WalletButton';

import { Link } from 'react-router-dom';

const appLinks = [
  {
    name: 'Token',
    link: 'token',
  },
  {
    name: 'Auction',
    link: 'auction',
  },
  {
    name: 'Lottery',
    link: 'lottery',
  },
  {
    name: 'Airdrop',
    link: 'airdrop',
  },
];

const Container = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '88px',
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  padding: '24px 136px',
  backgroundClip: 'border-box',
  justifyContent: 'space-between',
  borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: '0px',
  zIndex: '99',

  [theme.breakpoints.down('md')]: {
    padding: '24px 68px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 32px',
  },

  '.header__container': {
    display: 'flex',
  },

  '#header__container__img': {
    borderRadius: theme.shape.borderRadiusSm,
  },

  '#header__container__name': {
    fontSize: '20px',
    marginTop: '4px',
    marginLeft: '6px',
  },
  '#header__container__toggle': {
    width: '40px',
    height: '40px',
    padding: '6px 6px',
    borderRadius: theme.shape.borderRadiusSm,
    cursor: 'pointer',
    margin: '0px 10px',
    '&:hover': {
      border: '0.5px solid #fff',
    },
  },

  '.header__container__link': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.action.hover,
    },
    margin: '4px 22px',
    fontSize: '18px',
  },
}));

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const distpatch = useDispatch();
  const stateTheme = useSelector(selectTheme);

  const toggleTheme = () => {
    distpatch(changeTheme());
  };

  return (
    <HideOnScroll>
      <Container>
        <Box className="header__container">
          <Box
            id="header__container__img"
            component="img"
            src={stateTheme === 'light' ? iconLight : iconDark}
          ></Box>
          <Typography id="header__container__name">Sea</Typography>
        </Box>
        <Box className="header__container">
          {appLinks.map((applink, index) => (
            <Link className="header__container__link" to={applink.link} key={index}>
              {applink.name}
            </Link>
          ))}
          <Box
            id="header__container__toggle"
            component="img"
            src={stateTheme === 'light' ? iconSun : iconMoon}
            onClick={toggleTheme}
          ></Box>
          <WalletButton></WalletButton>
        </Box>
      </Container>
    </HideOnScroll>
  );
};

export default Header;
