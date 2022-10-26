import { Button, styled } from '@mui/material';

const ButtonCustom = styled(Button)(({ theme }) => ({
  height: '48px',
  backgroundColor: theme.palette.mode === 'dark' ? '#dee3f4' : '#45527e',
  color: theme.palette.mode === 'dark' ? '#45527e' : '#dee3f4',
  borderRadius: theme.shape.borderRadiusSm,
  padding: '0px 24px',
  fontSize: '16px',
  fontWeight: '600',

  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#bac7f0' : '#3b4a7b',
  },
}));

export default ButtonCustom;
