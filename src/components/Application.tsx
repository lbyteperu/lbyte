import React from 'react';
import './Application.scss';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#474747',
    },
    secondary: {
      main: '#ff9800',
    },
  },
});

const menuData = [
  {
    label: 'Home',
    href: '/home'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  },
]

const Application: React.FC = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header menuData={menuData}/>
      </ThemeProvider>
    </div>
  );
};

export default Application;
