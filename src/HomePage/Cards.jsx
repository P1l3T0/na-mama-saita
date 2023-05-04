export function Cards() {
    const cards = [{
        id: 1,
        picture: "../pictures/gromp.webp",
        src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        heading: "Иновативни нови начини за чертаене",
        paragraph: "placeholder paragraph sadasdasdasdsdfijfsd",
        date: "1.5.2023"
    }, {
        id: 2,
        picture: "../pictures/gromp.webp",
        src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        heading: "Иновативни нови начини за чертаене",
        paragraph: "placeholder paragraph sadasdasdasdsdfijfsd",
        date: "1.5.2023"
    }, {
        id: 3,
        picture: "../pictures/gromp.webp",
        src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        heading: "Иновативни нови начини за чертаене",
        paragraph: "placeholder paragraph sadasdasdasdsdfijfsd",
        date: "1.5.2023"
    }];

    return (
        <>
            <h2 className="title">Актуални новини</h2>
            <div className="home-cards">
                {cards.map(card =>
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