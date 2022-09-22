import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      dark: '#240D57',
      main: '#501FC1',
      light: '#8456EC',
      pink: '#E87BF8',
    },
    secondary: {
      main: '#CCB6FF',
      light: '#EDE5FF',
      lighter: '#F6F2FF',
    },
    alerts: {
      danger: {
        main: "#E61445",
        light: "#FFD7E0"
      },
      success: {
        main: "#00805E",
        light: "#D3FFE2",
      },
    },
    generals: {
      gray1: "#4F4F4F",
      gray2: "#828282",
      gray3: "#BDBDBD",
      gray4: "#E0E0E0",
      gray5: "#F2F2F2",
      white: "#BDBDBD",
    },
  },
});

export default theme;
