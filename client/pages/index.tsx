import { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';

const Index: NextPage = () => {
    return (
        <>
            <MainLayout>
                <div className="mt-40 flex flex-col items-center justify-center">
                    <h1>Welcome!</h1>
                    <h3>Here are the best tracks!</h3>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
