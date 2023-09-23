import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../Helpers/Data.json";

export function Cards() {
    const cardsData = [...data.cards].reverse();

    return (
        <>
            <h2>Актуални новини</h2>
            <div className="home-cards">
                {cardsData.map(card =>
                    <div className="card" key={card.id}>
                        <a href={card.src} target="_blank">
                            <div className="card-info">
                                <LazyLoadImage src={card.picture} />
                                <h1>{card.heading}</h1>
                                <div className="card-info-text">
                                    <p>{card.paragraph}</p>
                                    <p>{card.date}</p>
                                </div>
                            </div>
                        </a>
                    </div>)}
            </div>
        </>
    );
}