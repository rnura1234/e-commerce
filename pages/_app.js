import '../styles/globals.css';
import createCache from '@emotion/cache';
const clientSideEmotionCache = createCache({ key: 'css' });
import { CacheProvider } from '@emotion/react';
function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    // <CacheProvider value=''>
      <Component {...pageProps} />
    // </CacheProvider>
  );
}

export default MyApp;
