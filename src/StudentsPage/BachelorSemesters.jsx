import data from '../Helpers/Data.json';

const BachelorSemesters = () => {
    return (
        <>
            <div className="students-semesters">
                <h2>Учебен план - ОКС "Бакалавър"</h2>
                <div className="semesters">
                    {data.bachelorSubjects.map((subject, index) => (
                        <div key={index}>
                            <a href={subject.url} target='_blank'>
                                <h3>{subject.semester}</h3>
                                <ul>
                                    {subject.subjects.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BachelorSemesters;