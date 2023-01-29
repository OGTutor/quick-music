import { ITrack } from '@/types/track';
import { FC } from 'react';
import TrackItem from './TrackItem';

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
    return (
        <>
            {tracks.map((track) => (
                <TrackItem key={track._id} track={track} />
            ))}
        </>
    );
};

export default TrackList;
