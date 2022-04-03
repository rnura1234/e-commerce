import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Head from 'next/head';
import { Fragment } from 'react';
import NextLink from 'next/link';
import { Box } from '@mui/system';
import classes from './../../utils/classes';

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <Fragment>
      <Head>
        <title>{title ? `${title}-E.Commerce` : 'E-Commerce'}</title>
        <meta name='description' content={description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href='/' passHref>
              <Link>
                <Typography sx={classes.brand}>E-Commerce</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component='main' sx={classes.main}>
          {children}
        </Container>
        <Box component='footer' sx={classes.footer}>
          <Typography sx={classes.brand}>Copyright &copy; All Right Resered by Sanjeev </Typography>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}
