import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b1a',
    },
    secondary: {
      main: '#e91e63',
    },
   text: {
     primary: '#212121',
     secondary: '#212121',
   }
  },
  typography: {
    fontFamily: 'var(--font-spartan)',
    fontSize: 16,
    h1: {
      fontSize: '2rem'
    }
  }
});

export default theme;