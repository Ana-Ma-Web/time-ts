import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/700.css'

const theme = createTheme({
   palette: {
      common: {
         black: '#222531',
         white: '#EAEDF7',
      },
      primary: {
         light: '#8591bf',
         main: '#57648f',
         dark: '#2a3a61',
         contrastText: '#fff',
      },
      secondary: {
         light: '#ff79b0',
         main: '#ff4081',
         dark: '#c60055',
         contrastText: '#fff',
      },
      mode: 'dark',
      action: {
         hover: 'transparent',
      },
      background: {
         paper: '#262a38',
         default: '#222531',
      },
   },
   shadows: [
      'none',
      '0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.02)',
      '0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 5px 0px rgba(0,0,0,0.02)',
      '0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.02)',
      '0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.04),0px 1px 10px 0px rgba(0,0,0,0.02)',
      '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)',
      '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)',
      '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 0px rgba(0,0,0,0.02)',
      '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 0px rgba(0,0,0,0.02)',
      '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 0px rgba(0,0,0,0.02)',
      '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 0px rgba(0,0,0,0.02)',
      '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 0px rgba(0,0,0,0.02)',
      '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 0px rgba(0,0,0,0.02)',
      '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 0px rgba(0,0,0,0.02)',
      '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 0px rgba(0,0,0,0.02)',
      '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 0px rgba(0,0,0,0.02)',
      '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 0px rgba(0,0,0,0.02)',
      '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 0px rgba(0,0,0,0.02)',
      '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 0px rgba(0,0,0,0.02)',
      '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 0px rgba(0,0,0,0.02)',
      '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 0px rgba(0,0,0,0.02)',
      '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 0px rgba(0,0,0,0.02)',
      '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 0px rgba(0,0,0,0.02)',
      '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 0px rgba(0,0,0,0.02)',
      '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 0px rgba(0,0,0,0.02)',
   ],
   typography: {
      fontFamily: [
         'Nunito',
      ].join(',')
   },
   spacing: 4,
   components: {
   MuiPaper: {
      styleOverrides: {
         root: {
            backgroundImage: "unset",
         },
         
      },
   }
   },
})


export default theme;