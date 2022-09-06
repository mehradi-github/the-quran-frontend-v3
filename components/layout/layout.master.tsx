import React ,{Fragment, PropsWithChildren} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../navbar/navbar.component';


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children })=>{
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Navbar />
            { children }
       </ThemeProvider>
    )
}
export default Layout;