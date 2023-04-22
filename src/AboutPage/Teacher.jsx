export function Teacher({ src, name, aboutTeacher }) {
    return (
        <>
            <div className="about-section">
                <div className="about-img">
                    <img src={src} alt="teacher" />
                </div>
                <div className="about-text">
                    <h1>{name}</h1>
                    <p>{aboutTeacher}</p>
                </div>
            </div>
        </>
    );
}