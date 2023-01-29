import { FC } from 'react';
import Navbar from '../components/Navbar';

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
