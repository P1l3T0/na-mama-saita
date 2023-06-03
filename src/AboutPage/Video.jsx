import ReactPlayer from 'react-player';
import { useState } from 'react';

export function Video() {
    const [width, setWidth] = useState(1280);
    const [height, setHeight] = useState(720);

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1000) {
            setWidth(640);
            setHeight(360);
        }
        else {
            setWidth(1280);
            setHeight(720);
        }
    });

    return (
        <>
            <h2 className="teachers-h2">Кои сме ние?</h2>
            <div className="about-video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Nj3smRGS-LY"
                    controls muted
                    width={width}
                    height={height}
                />
            </div>
        </>
    );
}