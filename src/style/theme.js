import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#bb3e03',
  },
  palette: {
    primary: {
      main: '#005f73',
      darker: '#001219',
    },
    neutral: {
      main: '#ee9b00',
      contrastText: '#e9d8a6',
    },
  },
});;


export default theme