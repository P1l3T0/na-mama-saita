import { teachersData } from '../Helpers/Data';

export function Teachers() {
    return (
        <>
            <h2 className="teachers-h2">Ръководители</h2>
            {teachersData.map(teacher =>
                <div key={teacher.id} className="about-section">
                    <div className="about-img">
                        <img
                            src={teacher.picture}
                            alt={teacher.title + teacher.name}
                        />
                    </div>
                    <div className="about-text">
                        <h2 className='about-teacher'>{teacher.title + " " + teacher.name}</h2>
                        <p>{teacher.about}</p>
                        <h2>Водени дисциплини:</h2>
                        <ul>
                            {teacher.subjects.map((subject, index) =>
                                <li key={index}> {subject}</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};