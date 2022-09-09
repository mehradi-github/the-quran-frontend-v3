import React ,{Fragment, PropsWithChildren} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../navbar/navbar.component';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from './themeSlice';
import { getFontFaces } from './layout.utils';
import { blue, cyan } from '@mui/material/colors';
import { selectChapter } from '../chapter/chapterSlice';


declare module '@mui/material/styles' {
  interface TypographyVariants {
   // surahName: React.CSSProperties;
    verse: React.CSSProperties;
    verseNumber: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
   // surahName?: React.CSSProperties;
    verse?: React.CSSProperties;
    verseNumber?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
  //  surahName: true;
    verse: true;
    verseNumber: true;
  }
}
declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    signed: true;
  }
}

const Layout: React.FC<PropsWithChildren> = ({ children })=>{
  const loadedPages = useAppSelector(selectChapter).loadedPages;
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
      typography: {
        verse: {
          color: cyan[900],
          wordBreak:'break-all'          
        },
        verseNumber: {
          color: blue[300]         
        }
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: getFontFaces(loadedPages),
        },
        MuiAvatar:{
          variants: [
            {
              props: { variant: 'signed' },
              style: {
                backgroundColor: blue['50'] ,
                width: 50 ,
                height: 50
              }
            }
          ]
        }
      },
    }),
  [loadedPages,mode]
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