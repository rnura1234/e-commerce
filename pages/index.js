import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layouts/Layout';
import Productitem from '../components/Layouts/Products/ProductItem';
import styles from '../styles/Home.module.css';
import client from '../utils/client';

export default function Home() {
  const [state, setState] = useState({
    products: [],
    loading: false,
    errMessage: '',
  });
  const { products, loading, errMessage } = state;
  useEffect(() => {
    setState({ loading: true });
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type=='product']`);

        setState({ loading: false, products });
      } catch (error) {
        setState(setState({ loading: false, errMessage: error.message }));
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : errMessage ? (
        <Alert variant='danger'>{errMessage}</Alert>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => {
            return (
              <Grid key={product.slug.current} item md={3}>
                <Productitem product={product} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Layout>
  );
}
