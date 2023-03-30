import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import ThemeProvider from '@/components/ThemeProvider';
import { useTheme } from 'next-themes';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/config/createEmotionCache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightTheme, darkTheme } from '@/config/theme';
import { useEffect, useState } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient;

export default function MyApp(props: MyAppProps) {

  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <NextThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Next MUI Template</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="theme-color" content={currentTheme.palette.primary.main} />
        </Head>
        <ThemeProvider>
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
        </ThemeProvider>
      </CacheProvider >
    </NextThemeProvider>
  );
}