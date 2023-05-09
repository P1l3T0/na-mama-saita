import { cardsList } from "./CardsList";

export function Cards() {
    return (
        <>
            <h2
                style={{
                    fontSize: "3.25rem",
                    textAlign: "center",
                    color: "white",
                    textShadow: "2px 2px 4px black",
                    textTransform: "uppercase"
                }}
            >Актуални новини</h2>
            <div className="home-cards">
                {cardsList.map(card =>
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