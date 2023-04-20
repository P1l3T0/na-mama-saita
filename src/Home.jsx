import { Cards } from "./Cards";

export function Home() {
    return (
        <>
            <div className="home-main">
                <div className="home-text">
                    <h1>Технологии, дизайн и мениджмънт на модната индустрия</h1>
                </div>
                <div className="home-img">
                    <img src="./pictures/sketch-bg.webp" alt="sketches of clothes" />
                </div>
            </div>
            <div className="home-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum
                    debitis harum perferendis consequatur, ad dolorum quia iure reprehenderit
                    autem magni asperiores vero alias a, illo pariatur quis, doloribus sequi?
                </p>
            </div>
            <div className="home-main">
                <div className="home-img">
                    <img src="./pictures/sketch-bg.webp" alt="sketches of clothes" />
                </div>
                <div className="home-text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>

            <Cards />
        </>
    );
}