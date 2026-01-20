import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [loadingText, setLoadingText] = React.useState('Loading');

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText(prev => prev.length < 10 ? `${prev}.` : 'Loading');
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-animation">{loadingText}</div>
        </div>
    );
};

export default LoadingScreen;