import React ,{Fragment, PropsWithChildren} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../navbar/navbar.component';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from './themeSlice';
import { getFontFaces } from './layout.utils';



const Layout: React.FC<PropsWithChildren> = ({ children })=>{
  const stateTheme = useAppSelector(selectTheme);
// const theme =createTheme({
//       palette: {
//         mode,
//       },
//     });




const theme =React.useMemo(
  ()=>createTheme({
      palette: {
        mode:stateTheme.mode,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: getFontFaces(stateTheme.loadedFonts),
        },
      },
    }),
  [stateTheme]
); 

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            { children }
       </ThemeProvider>
    )
}
export default Layout;