import '../styles/globals.css';
import { FC } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
