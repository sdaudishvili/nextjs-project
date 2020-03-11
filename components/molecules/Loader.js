import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

function CircularDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div className="[ fixed w-100-percent h-100-percent top-7-0 left-27-5 flex justify-center items-center ]">
                <CircularProgress variant="determinate" value={progress} color="secondary" />
            </div>
            <div className="[ fixed w-100-percent h-100-percent top-7-0 left-27-5 flex bg-gray opacity-10 z-10 ]" />
        </div>
    );
}

export default function Loader(props) {
    return <>{useSelector((state) => state.notifs.loading || props.loading) && <CircularDeterminate />}</>;
}
