type Props = {
    progress: number;
};

export default function ProgressBar({ progress }: Props) {
    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            />
            <span className="progress-label">{progress}%</span>
        </div>
    );
}