import { Cards } from "./Cards";

export function Home() {
    return (
        <>
            <div className="home-main">
                <h1>Технологии, дизайн и мениджмънт на модната индустрия</h1>
            </div>
            <div className="home-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum
                    debitis harum perferendis consequatur, ad dolorum quia iure reprehenderit
                    autem magni asperiores vero alias a, illo pariatur quis, doloribus sequi?
                </p>
            </div>
            <Cards />
        </>
    );
}