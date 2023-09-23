import data from '../Helpers/Data.json';

export function BachelorSemesters() {
    return (
        <>
            <div className="students-semesters">
                <h2>Учебен план - ОКС "Бакалавър"</h2>
                <div className="semesters">
                    {data.bachelorSubjects.map(subject =>
                        <div key={subject.id}>
                            <a href={subject.url} target='_blank'>
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