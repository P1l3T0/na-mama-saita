export function Teachers() {
    const data = [{
        id: 0,
        picture: "./pictures/Диплом доцент 2022.jpg",
        title: "доц. д-р инж.",
        name: "Маргарет Сивова",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam commod" +
            "maiores quia quibusdam quidem cumque aspernatur enim magnam consequuntur, ullam," +
            "officiis sequi temporibus consectetur aliquid porro natus harum rem error optio? Quod" +
            "beatae, natus nulla perspiciatis exercitationem reiciendis rerum, assumenda, odit nisi vitae modi iusto ab! Odit optio ipsum officia?",
        subjects: ["subject 1", "subject 2", "subject 3", "subject 4", "subject 5",
            "subject 6", "subject 7", "subject 8", "subject 9", "subject 10"]
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
                        <h3>Водени дисциплини: </h3>
                        <p>
                            {person.subjects.map((subject, index) =>
                                <span key={subject}>
                                    {subject}
                                    {index !== person.subjects.length - 1 && ", "}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};