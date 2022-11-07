import React from 'react';
import { SpinnerCircular } from 'spinners-react';

// included this here and not in quotes.model.ts so that LoadingOverlay component is easily copied over and used in other apps
interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}
const LoadingOverlay = ({enabled, bgColor, spinnerColor}:LoadingOverlayProps) => {

    let styles:Object = {
        backgroundColor:bgColor
    };

    return (
        (enabled)
        ? 
        <div className="flex justify-center items-center fixed z-50 inset-0 w-full h-full" style={styles}>
            <SpinnerCircular 
                color={spinnerColor}
                secondaryColor={bgColor}
                thickness={150}
                size={75} />
        </div>
        : <div></div>
    );
}

export default LoadingOverlay;