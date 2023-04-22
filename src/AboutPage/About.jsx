import { Teacher } from "./Teacher";

export function About() {
    return (
        <>
            <div className="about-main">
                <h1>За нас</h1>
                <div className="about-info">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero a
                        quam omnis officiis ea, provident maxime exercitationem eos consequatur
                        nulla sit eligendi commodi, quia quis sequi laboriosam voluptatum
                        obcaecati consectetur quasi perspiciatis! Dolorem doloremque magnam dolore
                        culpa repellendus distinctio in commodi, molestiae dolor inventore.
                        Cupiditate voluptatibus aliquid vel sunt.
                    </p>
                </div>
                <h1>Ръководители</h1>
                <Teacher
                    src="https://picsum.photos/400/300?random=1"
                    name="доц. д-р инж. Маргарет Сивова"
                    aboutTeacher="Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Voluptates et perferendis odit ad?"
                />
                <Teacher
                    src="https://picsum.photos/400/300?random=2"
                    name="ас. приятелка на мама"
                    aboutTeacher="Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Voluptates et perferendis odit ad?"
                />
            </div>
        </>
    );
}