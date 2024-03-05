import { useState, useEffect } from 'react';

const GameWindowSize = (props) => {

    function getGameScreenSize(gameWidth, gameHeight, screenWidth, screenHeight) {
        try {
            let gameAspectRatio = gameWidth / gameHeight;
            let screenAspectRatio = screenWidth / screenHeight;

            if (screenAspectRatio <= gameAspectRatio)
            {
                //the width needs to be pulled in to match the screen aspect ratio
                const width = screenWidth;
                const height = ((width * gameHeight) / gameWidth);
                return { desiredWidth: width, desiredHeight: height };
            }
            else
            {
                //the height needs to be pulled in to match the screen aspect ratio
                const height = screenHeight;
                const width = ((gameWidth * height) / gameHeight);
                return { desiredWidth: width, desiredHeight: height };
            }
        } catch (error) {
            console.error(error);
        }
    }

    var result = getGameScreenSize(
        props.width, 
        props.height, 
        window.innerWidth , 
        window.innerHeight)
    const [gameScreenSize, setGameScreenSize] = useState({
        width: result.desiredWidth,
        height: result.desiredHeight,
        widthMultiplier: (result.desiredWidth / props.width),
        heightMultiplier: (result.desiredHeight / props.height),
    });

    useEffect(() => {
        const handleResize = () => {
            var result = getGameScreenSize(props.width, props.height, window.innerWidth, window.innerHeight)
            setGameScreenSize({
                width: result.desiredWidth,
                height: result.desiredHeight,
                widthMultiplier: (result.desiredWidth / props.width),
                heightMultiplier: (result.desiredHeight / props.height),
            });
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return gameScreenSize;
};

export default GameWindowSize;