import React, { useState } from "react";

export function Video() {
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(500);
    const [muted, setMuted] = useState(true);

    const handleVideoClick = () => {
        setMuted(!muted);
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1000) {
            setWidth(640);
            setHeight(360);
        } else {
            setWidth(1000);
            setHeight(500);
        }
    });

    return (
        <>
            <h2 className="teachers-h2">Кои сме ние?</h2>
            <div className="about-video">
                <iframe
                    width={width}
                    height={height}
                    src={`https://www.youtube.com/embed/Nj3smRGS-LY?mute=${muted ? "1" : "0"}`}
                    title="За вас, кандидат-студенти"
                    loading="lazy"
                    allowFullScreen
                    onClick={handleVideoClick}
                />
            </div>
        </>
    );
}

