import { ITrack } from '@/types/track';
import { FC } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <button>
                            <img
                                src={track.picture}
                                alt="picture"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-1 text-lg font-medium text-gray-900">
                            {track.name}
                        </p>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                            {track.artist}
                        </p>
                        <IconButton>
                            {active ? <PauseIcon /> : <PlayArrowIcon />}
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackItem;
