import { cardsList } from "./CardsList";

export function Cards() {
    const reversedCardsList = [...cardsList].reverse();

    return (
        <>
            <h2>Актуални новини</h2>
            <div className="home-cards">
                {reversedCardsList.map(card =>
                    <div className="card" key={card.id}>
                        <a href={card.src} target="_blank">
                            <img src={card.picture} alt="news card 1" />
                            <h1>{card.heading}</h1>
                            <p>{card.paragraph} <span>{card.date}</span></p>
                        </a>
                    </div>)}
            </div>
        </>
    );
}