import { subjectsData } from '../Helpers/Data';

export function Semesters() {
    return (
        <>
            <div className="students-semesters">
                <h2>Учебен план</h2>
                <div className="semesters">
                    {subjectsData.map(subject =>
                        <div key={subject.id}>
                            <a href={subject.url} download>
                                <h3>{subject.semester}</h3>
                                <ul>
                                    {subject.subjects.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}