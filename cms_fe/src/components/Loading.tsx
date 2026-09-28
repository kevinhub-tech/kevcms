import React from 'react';
import { PulseLoader } from 'react-spinners';

interface LoadingProps {
    message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed backdrop
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // Sits on top of everything
        }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
                <PulseLoader color="#ffffff" size={15} />
                <p style={{ marginTop: '10px' }}>{message}</p>
            </div>
        </div>
    );
};



export default Loading;