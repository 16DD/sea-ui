/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { PaletteColor } from '@mui/material/styles/createPalette';

//override interface
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primaryLight: PaletteColor;
    primaryDark: PaletteColor;
  }
}

// SETUP COLORS
const PRIMARY = {
  light: '#dde0ed',
  main: '#dee3f4',
  dark: '#2d375a',
};

const PRIMARY_LIGHT = {
  light: '#dde0ed',
  main: '#c9d1ed',
  dark: '#2d375a',
};

const PRIMARY_DARK = {
  light: '#dde0ed',
  main: '#2d375a',
  dark: '#162042',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 1),
};

const COMMON = {
  common: { black: '#1D1D1F', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  primaryLight: { ...PRIMARY_LIGHT, contrastText: GREY['800'] },
  primaryDark: { ...PRIMARY_DARK, contrastText: '#fff' },
  grey: GREY,
  action: {
    hover: GREY[500_80],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    mode: 'light' as PaletteMode,
    ...COMMON,
    text: {
      primary: '#676464',
      secondary: 'rgba(29, 29, 31, 0.5)',
      disabled: GREY['500'],
    },
    background: {
      default: '#dee3f4',
    },
    action: { active: GREY['600'], ...COMMON.action },
  },
  dark: {
    mode: 'dark' as PaletteMode,
    ...COMMON,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.5)',
      disabled: GREY['600'],
    },
    background: {
      default: '#45527e',
    },
    action: { active: GREY['500'], ...COMMON.action },
  },
};

export default palette;
