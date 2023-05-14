import { teacherslist } from "./TeachersList";

export function Teachers() {
    return (
        <>
            <h2 className="teachers-h2">Ръководители</h2>
            {teacherslist.map(person =>
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