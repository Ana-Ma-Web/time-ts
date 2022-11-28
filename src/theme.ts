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
      background: {
         paper: '#34395038',
         default: '#222531',
      },
   },
   typography: {
      fontFamily: [
         'Nunito',
      ].join(',')
   },
   spacing: 4,
   components: {

   },
})


export default theme;