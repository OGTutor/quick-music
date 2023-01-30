import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {
    const track: ITrack = {
        _id: '3',
        name: 'Track 3',
        artist: 'Some artist',
        text: 'Some text',
        listens: 15,
        audio: 'http://localhost:5000/audio/edbe989b-f7d6-435f-9693-de613736c0e4.mp3',
        picture:
            'http://localhost:5000/image/60140842-eec8-4be9-9dac-3a27129c45f5.jpg',
        comments: [
            { _id: 'asdasdad', username: 'danil', text: 'aasdsadasdasd' },
        ],
    };
    const router = useRouter();

    return (
        <MainLayout>
            <div className="bg-white">
                <div className="pt-6">
                    <div className="relative mt-6">
                        <button
                            className="absolute m-0 left-1/2 py-2 px-6 border rounded-lg shadow-md bg-violet-400 hover:bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
                            onClick={() => router.push('/tracks')}
                        >
                            Track list
                        </button>
                    </div>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 justify-center items-center">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                className="max-w-md max-h-xl rounded-lg left-auto border shadow-md"
                                src={track.picture}
                                alt="picture"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg font-bold">
                                <h1 className="text-4xl">{track.name}</h1>
                                <h1 className="text-3xl mt-14">
                                    {track.artist}
                                </h1>
                                <h1 className="text-2xl mt-28">
                                    {track.listens}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block text-right">
                            <h1 className="text-4xl font-bold">Track text</h1>
                            <p className="mt-16 text-lg font-bold">
                                {track.text}
                            </p>
                        </div>
                        <form action="#" method="POST">
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg font-bold">
                                    <h1 className="text-4xl">Comments</h1>
                                    <div className="col-span-6 sm:col-span-3 mt-16 px-1">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="md:grid md:grid-cols-3 md:gap-6 mt-40 px-1">
                                        <div className="mt-5 md:col-span-2 md:mt-0">
                                            <label
                                                htmlFor="comment"
                                                className="block text-sm text-gray-500"
                                            >
                                                Text of your comment
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="comment"
                                                    name="comment"
                                                    rows={9}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
                                                    placeholder="Some comment..."
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="ml-1 mt-2 py-2 px-6 border rounded-lg shadow-md bg-violet-400 hover:bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
                                type="submit"
                            >
                                Comment
                            </button>
                        </form>
                    </div>
                    <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block text-right">
                            {track.comments.map((comment) => (
                                <div>
                                    <div className="text-xl font-bold">
                                        {comment.username}
                                    </div>
                                    <div className="mt-2">{comment.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TrackPage;
