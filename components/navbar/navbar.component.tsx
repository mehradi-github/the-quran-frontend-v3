import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon
  } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, toggleColorMode } from '../layout/themeSlice';


const Navbar= () => {
  const dispatch = useAppDispatch();
  const theme =useAppSelector(selectTheme)
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
       dark mode
      <IconButton sx={{ ml: 1 }} onClick={()=>dispatch(toggleColorMode())}  color="inherit">
      {theme.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default Navbar;