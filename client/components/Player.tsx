import { useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import TrackProgress from './TrackProgress';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

let audio: HTMLAudioElement;

const Player = () => {
    const { pause, volume, active, duration, currentTime } = useTypedSelector(
        (state) => state.player,
    );
    const {
        pauseTrack,
        playTrack,
        setVolume,
        setCurrentTime,
        setDuration,
        setActiveTrack,
    } = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active]);

    const setAudio = () => {
        if (active) {
            audio.src = active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };
    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };

    if (!active) {
        return null;
    }

    return (
        <div className="h-16 w-full fixed bottom-0 flex items-center px-3 bg-gradient-to-r from-purple-300 to-purple-50 hover:from-purple-50 hover:to-purple-300 rounded-t-3xl">
            <IconButton onClick={play}>
                {!pause ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <div className="flex flex-col">
                <p className="mt-3 mx-20 text-lg font-normal text-gray-900">
                    {active?.name}
                </p>
                <p className="mb-3 mx-20 text-lg font-thin text-gray-900">
                    {active?.artist}
                </p>
            </div>
            <TrackProgress
                left={currentTime}
                right={duration}
                onChange={changeCurrentTime}
            />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
};

export default Player;
