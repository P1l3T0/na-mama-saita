import data from "../Helpers/Data.json";

const MastersSemesters = () => {
    return (
        <>
            <div className="students-semesters">
                <h2>Учебен план - ОКС "Магистър"</h2>
                <div className="semesters">
                    {data.mastersSubjects.map((subject, index) => (
                        <div key={index} style={{ margin: "2rem 3rem" }}>
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

export default MastersSemesters;