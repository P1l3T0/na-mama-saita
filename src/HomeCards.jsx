import { Card } from "./Card";

export function HomeCards() {
    return (
        <>
            <div className="home-cards">
                <Card
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    src="https://picsum.photos/400/300?random=1"
                    heading="Иновативни нови начини за чертаене"
                    paragraph="placeholder paragraph"
                />
                <Card
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    src="https://picsum.photos/400/300?random=2"
                    heading="Иновативни нови начини за чертаене"
                    paragraph="placeholder paragraph"
                />
                <Card
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    src="https://picsum.photos/400/300?random=3"
                    heading="Иновативни нови начини за чертаене"
                    paragraph="placeholder paragraph"
                />
                <Card
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    src="https://picsum.photos/400/300?random=4"
                    heading="Иновативни нови начини за чертаене"
                    paragraph="placeholder paragraph"
                />
            </div>
        </>
    );
}