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
            audio: 'http://localhost:5000/audio/f853997c-20cc-412b-b3d4-e4d8f9d61adc.mp3',
            picture:
                'http://localhost:5000/image/21537811-05d3-44b3-8356-47291935f4c5.jpg',
            comments: [],
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'Some artist',
            text: 'Some text',
            listens: 10,
            audio: 'http://localhost:5000/audio/387e259e-a7b4-48b8-b897-ee2fd4758be1.mp3',
            picture:
                'http://localhost:5000/image/319b7bf6-2eeb-4507-88e1-98fd02712c57.jpg',
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
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
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
                            <div className="py-12">
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
