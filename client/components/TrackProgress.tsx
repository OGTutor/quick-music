import { FC } from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
    return (
        <div className="flex">
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>
                {left} / {right}
            </div>
        </div>
    );
};

export default TrackProgress;
