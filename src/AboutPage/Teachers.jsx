export function Teachers() {
    const data = [{
        id: 0,
        picture: "https://picsum.photos/400/300?random=1",
        title: "доц. д-р инж.",
        name: "Маргарет Сивова",
        about: "lorem ipsum dolor sit amet",
        subjects: ["subject 1", "subject 2", "subject 3", "subject 4"]
    }, {
        id: 1,
        picture: "https://picsum.photos/400/300?random=2",
        title: "ас. инж.",
        name: "приятелка на мама",
        about: "lorem ipsum dolor sit amet",
        subjects: ["subject 1", "subject 2", "subject 3", "subject 4"]
    }];

    return (
        <>
            <h2>Ръководители</h2>
            {data.map(person =>
                <div key={person.id} className="about-section">
                    <div className="about-img">
                        <img src={person.picture} alt="teacher" />
                    </div>
                    <div className="about-text">
                        <h2>{person.title + " " + person.name}</h2>
                        <p>{person.about}</p>
                        <ul>Водени дисциплини:
                            {person.subjects.map(subject =>
                                <li key={subject}>
                                    -{subject}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};