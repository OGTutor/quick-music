import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch } from 'react-redux';
import { NextThunkDispatch } from '@/store';
import { searchTracks } from '@/store/actions-creators/track';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector((state) => state.track);
    const [query, setQuery] = useState<string>('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(0);

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value));
            }, 500) as unknown as number,
        );
    };

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }

    return (
        <MainLayout title={'Tracks list - Quick Music'}>
            <div className="container-none mx-auto bg-white">
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-w-4 aspect-h-1 overflow-hidden rounded-lg font-bold">
                                    <div className="col-span-6 sm:col-span-3 mt-10 p-2">
                                        <input
                                            value={query}
                                            onChange={search}
                                            type="text"
                                            name="search"
                                            id="search"
                                            autoComplete="given-name"
                                            placeholder="Name of the track"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="hidden sm:mb-8 sm:flex sm:justify-center"
                                onClick={() => router.push('/tracks/create')}
                            >
                                <div className="relative rounded-full py-5 px-5 text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Download the new track now!{' '}
                                    <button className="font-semibold text-indigo-600">
                                        <span
                                            className="absolute inset-0"
                                            aria-hidden="true"
                                        />
                                        Download <DownloadIcon />
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Tracks
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Anim aute id magna aliqua ad ad non deserunt
                                    sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat fugiat
                                    aliqua.
                                </p>
                            </div>
                            <div className="py-24">
                                <TrackList tracks={tracks} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};

export default Index;
