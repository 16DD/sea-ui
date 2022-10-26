import { Box, Link, Stack, styled, Typography } from '@mui/material';
import iconLight from 'assets/svg/logo-light.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
const about = [
  {
    title: 'Contact',
    link: 'https://google.com',
  },
  {
    title: 'Blog',
    link: '',
  },
  {
    title: 'Community',
    link: '',
  },
];

const help = [
  {
    title: 'Cumtomer Support',
    link: '',
  },
  {
    title: 'Guides',
    link: '',
  },
];

const developers = [
  {
    title: 'Github',
    link: '',
  },
  {
    title: 'Documentation',
    link: '',
  },
];

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  backgroundColor: '#46527e',
}));

const FooterWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '200px',
  padding: '40px 260px 0px 260px',
}));

const FooterTypography = styled(Typography)(({ theme }) => ({
  color: '#00f5f3',
  fontWeight: '900',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: '400',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const FooterLogoName = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '90px',

  '.footer-logo': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  '.footer-name': {
    color: '#FFF',
    fontWeight: '900',
    position: 'absolute',
    top: '6px',
    right: '0px',
  },
}));

const FooterExternal = styled(Box)(({ theme }) => ({
  padding: '20px 260px',
  '.footer-external-wrapper': {
    display: 'flex',
    width: '80px',
    justifyContent: 'space-between',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Stack spacing={1}>
          <FooterTypography variant="h6">ABOUT</FooterTypography>
          {about.map((impl, index) => (
            <FooterLink href={impl.link} key={index}>
              {impl.title}
            </FooterLink>
          ))}
        </Stack>
        <Stack spacing={1}>
          <FooterTypography variant="h6">HELP</FooterTypography>
          {help.map((impl, index) => (
            <FooterLink href={impl.link} key={index}>
              {impl.title}
            </FooterLink>
          ))}
        </Stack>
        <Stack spacing={1}>
          <FooterTypography variant="h6">DEVELOPERS</FooterTypography>
          {developers.map((impl, index) => (
            <FooterLink href={impl.link} key={index}>
              {impl.title}
            </FooterLink>
          ))}
        </Stack>

        <FooterLogoName>
          <Box className="footer-logo" component="img" src={iconLight}></Box>
          <Typography className="footer-name" variant="h5">
            SEA
          </Typography>
        </FooterLogoName>
      </FooterWrapper>
      <FooterExternal>
        <Box className="footer-external-wrapper">
          <TelegramIcon sx={{ color: '#000' }}></TelegramIcon>
          <GitHubIcon sx={{ color: '#000' }}></GitHubIcon>
        </Box>
      </FooterExternal>
    </FooterContainer>
  );
};

export default Footer;
