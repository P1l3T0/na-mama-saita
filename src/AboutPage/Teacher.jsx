export function Teacher({ src, name, children }) {
    return (
        <>
            <div className="about-section">
                <div className="about-img">
                    <img src={src} alt="teacher" />
                </div>
                <div className="about-text">
                    <h2>{name}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </>
    );
}