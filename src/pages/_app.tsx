import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/config/createEmotionCache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import constructTheme from '@/config/theme';
import { themeModeStore } from '@/store/themeMode';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient;

export default function MyApp(props: MyAppProps) {

  const themeMode = themeModeStore((state) => state.themeMode);
  const theme = constructTheme(themeMode);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next MUI Template</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          {/* {console.log("theme", theme.palette.mode)} */}
          <QueryClientProvider client={queryClient}>
            <div>
              <style jsx global>{`
              *{
                font-family: "Roboto", sans-serif;
                margin: 0;
              }
              `}</style>
              <Component {...pageProps} />
            </div>
          </QueryClientProvider>
        </>
      </ThemeProvider>
    </CacheProvider >
  );
}