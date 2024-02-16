import React from 'react';
import './Application.scss';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styles from './Application.css'

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
    label: 'Blogggg',
    href: '/blog',
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  },
]

const Application: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header menuData={menuData} />
      <div className={styles.wrapper}>
        <section className={styles.title} >
          <Typography variant="h3" gutterBottom align='center'>
            Empezemos a programar
          </Typography>
        </section>
        <section className={styles.cards}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          
        </section>
        <section className={styles.cards}>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
        </section>
      </div>
    </ThemeProvider>

  );
};

export default Application;
