import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Player = () => {
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
    const active = false;

    return (
        <div className="h-16 w-full fixed bottom-0 flex items-center px-3 bg-gradient-to-r from-purple-300 to-purple-50 hover:from-purple-50 hover:to-purple-300 rounded-t-3xl">
            <IconButton>
                {active ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <div className="flex flex-col">
                <p className="mt-3 mx-20 text-lg font-normal text-gray-900">
                    {track.name}
                </p>
                <p className="mb-3 mx-20 text-lg font-thin text-gray-900">
                    {track.artist}
                </p>
            </div>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    );
};

export default Player;
