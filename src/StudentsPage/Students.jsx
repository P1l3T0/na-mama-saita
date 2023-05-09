import { items } from "./SubjectsList";

export function Students() {
    return (
        <>
            <h1 className="title">Студенти</h1>
            <h2>Учебен план</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
                labore autem quod nobis, porro pariatur et illo voluptatem error
                similique distinctio voluptatum mollitia, necessitatibus nesciunt! Nemo
                suscipit voluptas itaque harum.
            </p>
            <div className="semesters">
                {items.map(subject =>
                    <div key={subject.id}>
                        <h3>{subject.semester}</h3>
                        <ul>
                            {subject.subjects.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
