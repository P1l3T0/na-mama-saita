import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../Helpers/Data.json";

export function Image({ handleImageClick }) {
    var reverseImage = [...data.images].reverse();

    return (
        <>
            <div className="image-container">
                {reverseImage.map(image =>
                    <div className="image" key={image.id}>
                        <LazyLoadImage src={image.src} alt={image.alt} effect="blur" onClick={() => handleImageClick(image.src)}
                            style={{
                                transition: "350ms ease-in-out",
                                objectFit: "cover",
                                maxWidth: "100%",
                                cursor: "pointer",
                                display: "flex",
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
}