import React from 'react'
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

export function LottieFile({ animationData, isStopped, isPaused, height, width }) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            isStopped={isStopped}
            isPaused={isPaused}
        />
    )
}

LottieFile.propTypes = {
    animationData: PropTypes.instanceOf(Object).isRequired,
    isStopped: PropTypes.bool,
    isPaused: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

LottieFile.defaultProps = {
    isStopped: false,
    isPaused: false,
    height: 80,
    width: 80,
}