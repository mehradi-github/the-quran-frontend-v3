import React ,{Fragment, PropsWithChildren} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../navbar/navbar.component';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from './themeSlice';



const Layout: React.FC<PropsWithChildren> = ({ children })=>{
  const mode = useAppSelector(selectTheme).mode;
// const theme =createTheme({
//       palette: {
//         mode,
//       },
//     });
const theme =React.useMemo(
  ()=>createTheme({
      palette: {
        mode,
      },
    }),
  [mode]
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