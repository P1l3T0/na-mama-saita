import { items } from "./SubjectsList";

export function Students() {
    return (
        <>
            <div className="students-main">
                <h1 className="title">Студенти</h1>
                <div className="students-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
                        labore autem quod nobis, porro pariatur et illo voluptatem error
                        similique distinctio voluptatum mollitia, necessitatibus nesciunt! Nemo
                        suscipit voluptas itaque harum.
                        za cqlata y4ebna programa kliknete <a href="https://shorturl.at/dmyAJ" target="_blank">tyk</a>
                    </p>
                </div>
                <div className="students-semesters">
                    <h2>Учебен план</h2>
                    <div className="semesters">
                        {items.map(subject =>
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
            </div>
        </>
    );
}
