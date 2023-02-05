import Player from '@/components/Player';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
    children,
    title,
    description,
    keywords,
}) => {
    return (
        <>
            <Head>
                <title>{title || 'Quick Music'}</title>
                <meta
                    name="description"
                    content={
                        'Quick Music. Here everyone can leave their track and become famous.' +
                        description
                    }
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content={keywords || 'Music, tracks, artists'}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            {children}
            <Player />
        </>
    );
};

export default MainLayout;
