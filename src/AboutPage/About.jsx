import { Teachers } from "./Teachers";
import { Video } from "./Video";

export function About() {
    return (
        <>
            <div className="about-main">
                <h1 className="title">За нас</h1>
                <div className="about-info">
                    <p className="paragraph">
                        Специалността подготвя студентите за кариера в модния сектор.
                        Студентите придобиват умения в моден дизайн, изследване на тенденции
                        и създаване на колекции. Те се обучават и в технологичните процеси на
                        производството на модни продукти, както и в областта на мениджмънта на модни
                        проекти. След завършване на специалността, студентите могат да работят като модни
                        дизайнери, технолози, мениджъри на модни марки и други професии в модния бизнес.
                    </p>
                </div>
                <Video />
                <Teachers />
            </div>
        </>
    );
}
