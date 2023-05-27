import { Teachers } from "./Teachers";

export function About() {
    return (
        <>
            <div className="about-main">
                <h1 className="title">За нас</h1>
                <div className="about-info">
                    <p className="paragraph">
                        ТДММИ е специалност, насочваща младите студенти към сфертата и технологиите
                        на модната индустрия. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Itaque atque voluptate expedita nemo dolor aperiam provident illum nesciunt non sed?
                    </p>
                </div>
                <Teachers />
            </div >
        </>
    );
}
