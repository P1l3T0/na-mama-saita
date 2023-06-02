import ReactPlayer from 'react-player';

export function Video() {
    return (
        <>
            <h2 className="teachers-h2">Кои сме ние?</h2>
            <div className="about-video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Nj3smRGS-LY"
                    controls muted
                />
            </div>
        </>
    );
}