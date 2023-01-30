import TrackList from '@/components/TrackList';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Track 1',
            artist: 'Some artist',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:5000/audio/8d0e3bc-317a-4aa2-b29a-4bae912ca1ad.mp3',
            picture:
                'http://localhost:5000/image/91233ffb-3620-4826-986e-34d77c3ea97d.jpg',
            comments: [],
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'Some artist',
            text: 'Some text',
            listens: 10,
            audio: 'http://localhost:5000/audio/d920cdee-b625-438c-a1b1-296dc0054caf.mp3',
            picture:
                'http://localhost:5000/image/a5143eb5-a405-4ff1-8e07-92719cbcb11f.jpg',
            comments: [],
        },
        {
            _id: '3',
            name: 'Track 3',
            artist: 'Some artist',
            text: 'Some text',
            listens: 15,
            audio: 'http://localhost:5000/audio/edbe989b-f7d6-435f-9693-de613736c0e4.mp3',
            picture:
                'http://localhost:5000/image/60140842-eec8-4be9-9dac-3a27129c45f5.jpg',
            comments: [],
        },
    ];
    return (
        <MainLayout>
            <div className="container-none mx-auto bg-white">
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base font-semibold leading-7 text-gray-900"
                                    >
                                        Learn more{' '}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <TrackList tracks={tracks} />
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};

export default Index;
