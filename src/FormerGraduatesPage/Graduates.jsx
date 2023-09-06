import { formerGraduates } from "../Helpers/Data";

export function Graduates() {
    return (
        <>
            {formerGraduates.map(student =>
                <div key={student.id} className="about-section">
                    <div className="about-img">
                        <img src={student.picture} alt={student.name} />
                    </div>
                    <div className="about-text">
                        <h2 className='about-teacher'>{student.name}</h2>
                        <p>{student.about}</p>
                        <h2 style={{ fontSize: "2.25rem" }}>Разработвани проекти:</h2>
                        <ul>
                            {student.projects.map((projects, index) =>
                                <li key={index}> {projects}</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}