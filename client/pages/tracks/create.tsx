import { useState } from 'react';
import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';
import FileUpload from '@/components/FileUpload';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const [data, setData] = useState({ name: '', artist: '', text: '' });
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        console.log(e.target);
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prevState) => prevState + 1);
        } else {
            if (picture && audio) {
                const formData = new FormData();
                formData.append('name', data.name);
                formData.append('artist', data.artist);
                formData.append('text', data.text);
                formData.append('picture', picture);
                formData.append('audio', audio);
                axios
                    .post('http://localhost:5000/tracks', formData)
                    .then((res) => router.push('/tracks'))
                    .catch((e) => console.log(e));
            }
        }
    };
    const back = () => {
        setActiveStep((prevState) => prevState - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <div className="px-4 py-5 sm:px-6">
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-1 overflow-hidden rounded-lg font-bold">
                                <div className="col-span-6 sm:col-span-3 mt-4 px-1">
                                    <input
                                        value={data.name}
                                        onChange={handleChange}
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        placeholder="Name of the track"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3 mt-20 px-1">
                                    <input
                                        value={data.artist}
                                        onChange={handleChange}
                                        type="text"
                                        name="artist"
                                        id="artist"
                                        autoComplete="given-name"
                                        placeholder="Track artist name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3 mt-36 px-1">
                                    <textarea
                                        value={data.text}
                                        onChange={handleChange}
                                        id="text"
                                        name="text"
                                        rows={9}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
                                        placeholder="Track lyrics"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 1 && (
                    <div className="text-center aspect-w-3 aspect-h-1">
                        <FileUpload setFile={setPicture} accept="image/*">
                            <button className="mt-40 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Download cover
                            </button>
                        </FileUpload>
                    </div>
                )}
                {activeStep === 2 && (
                    <div className="text-center aspect-w-3 aspect-h-1">
                        <FileUpload setFile={setAudio} accept="audio/*">
                            <button className="mt-40 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Download track
                            </button>
                        </FileUpload>
                    </div>
                )}
                <div className="mt-10 mb-5 mr-1 ml-1 flex gap-x-6 place-content-between">
                    <button
                        className={`rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm  ${
                            activeStep === 0
                                ? 'opacity-40'
                                : 'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        }`}
                        onClick={back}
                        disabled={activeStep === 0}
                    >
                        <span aria-hidden="true">←</span> Back
                    </button>
                    <button
                        className={`rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ${
                            activeStep === 2 && !picture && !audio
                                ? 'opacity-40'
                                : 'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        }`}
                        onClick={next}
                        disabled={!picture && !audio && activeStep === 2}
                    >
                        Next <span aria-hidden="true">→</span>
                    </button>
                </div>
            </StepWrapper>
        </MainLayout>
    );
};

export default Create;
