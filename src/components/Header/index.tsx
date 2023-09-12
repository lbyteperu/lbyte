import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { LbyteIcon } from '@lbyteperu/lbyte-ui-library';
import SwitchMode from '../SwitchMode';
import styles from './index.css';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location='/'>{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

export declare interface Props {
  menuData: Array<Menu>,
}

export default function Header({ menuData }: Props) {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={styles.toolbar}>
        {femmecubatorLogo}
        <div>
          <Router>{getMenuButtons()}</Router>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label='menu'
          aria-haspopup={true}
          className={styles.iconButton}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor='left'
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div className={styles.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>
          {femmecubatorLogo}
        </div>
        <SwitchMode />
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return menuData.map(({ label, href }) => {
      return (
        <Link key={label}>
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = <LbyteIcon size='x-large' />;

  const getMenuButtons = () => {
    return menuData.map(({ label, href }) => {
      return (
        <Button key={label} component={RouterLink} to={href} color='inherit'>
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar className={styles.header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
