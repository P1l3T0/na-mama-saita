import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
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
                        <h2>{teacher.title + " " + teacher.name}</h2>
                        <p>{teacher.about}</p>
                        <h3>Водени дисциплини: </h3>
                        <p>
                            {teacher.subjects.map((subject, index) =>
                                <span key={subject}>
                                    {subject}
                                    {index !== teacher.subjects.length - 1 && ", "}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};