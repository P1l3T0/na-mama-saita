export function Card({ href, src, heading, paragraph }) {
    return (
        <>
            <div className="card">
                <a href={href} target="_blank">
                    <img src={src} alt="news card 1" />
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>
                </a>
            </div>
        </>
    );
}