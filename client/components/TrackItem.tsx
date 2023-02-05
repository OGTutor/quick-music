import { ITrack } from '@/types/track';
import { FC } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { deleteTrack } from '@/store/actions-creators/track';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter();
    const { playTrack, pauseTrack, setActiveTrack } = useActions();

    const play = () => {
        setActiveTrack(track);
        playTrack();
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <button
                            onClick={() => router.push(`/tracks/${track._id}`)}
                        >
                            <img
                                src={'http://localhost:5000/' + track.picture}
                                alt="picture"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <button
                            onClick={() => router.push(`/tracks/${track._id}`)}
                            className="mr-auto"
                        >
                            <p className="text-2xl font-medium text-gray-900">
                                {track.name}
                            </p>
                        </button>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                            {track.artist}
                        </p>
                        <div className="mt-5">
                            <IconButton onClick={play}>
                                {active ? <PauseIcon /> : <PlayArrowIcon />}
                            </IconButton>
                        </div>
                        {active && <div>02:42 / 03:22</div>}
                        <div className="mt-5">
                            <IconButton
                                style={{
                                    marginLeft: 'auto',
                                    marginTop: 'auto',
                                }}
                                onClick={() => deleteTrack(track._id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackItem;
