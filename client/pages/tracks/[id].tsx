import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { useRouter } from 'next/router';
import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const TrackPage = ({ serverTrack }) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const [data, setData] = useState({ username: '', text: '' });
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const addComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/tracks/comment',
                {
                    username: data.username,
                    text: data.text,
                    trackId: track._id,
                },
            );
            setTrack({
                ...track,
                comments: [...track.comments, response.data],
            });
            setData((prevState) => ({ ...prevState, username: '', text: '' }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MainLayout
            title={'Quick Music - ' + track.name + ' - ' + track.artist}
            keywords={'Music, artists, ' + track.name + ', ' + track.artist}
        >
            <div className="bg-white">
                <div className="pt-6">
                    <div className="relative mt-6">
                        <button
                            className="rounded-md bg-indigo-600 py-2 px-6 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 absolute m-0 left-1/2 border"
                            onClick={() => router.push('/tracks')}
                        >
                            Track list
                        </button>
                    </div>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 justify-center items-center">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                className="max-w-md max-h-xl rounded-lg left-auto border shadow-md"
                                src={'http://localhost:5000/' + track.picture}
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
                                            value={data.username}
                                            onChange={handleChange}
                                            type="text"
                                            name="username"
                                            id="username"
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
                                                    value={data.text}
                                                    onChange={handleChange}
                                                    id="text"
                                                    name="text"
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
                                className="rounded-md bg-indigo-600 ml-1 mt-2 py-2 px-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={addComment}
                            >
                                Comment
                            </button>
                        </form>
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block text-right">
                            <div className="lg:flex-col columns-1 items-end justify-end w-full">
                                {track.comments.map((comment) => (
                                    <div className="mb-7 p-6 rounded bg-gradient-to-r from-purple-300 to-purple-50 shadow-md shadow-cyan-500/50">
                                        <div className="flex items-center border-gray-200 pb-6">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-xl font-medium leading-5 text-gray-800">
                                                        {comment.username}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg font-bold">
                            <div className="lg:flex-col columns-1 items-end justify-end w-full">
                                {track.comments.map((comment) => (
                                    <div className="mb-7 bg-white p-6 rounded bg-gradient-to-r from-purple-50 to-purple-300 shadow-md shadow-cyan-500/50">
                                        <div className="flex items-center border-gray-200 pb-6">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-sm leading-5 text-gray-500">
                                                        {comment.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get(
        'http://localhost:5000/tracks/' + params?.id,
    );
    return { props: { serverTrack: response.data } };
};
