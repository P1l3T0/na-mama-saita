import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageList } from "./ImageList";

export function Image({ handleImageClick }) {
    return (
        <>
            {imageList.map(image =>
                <div className="image" key={image.id}>
                    <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        style={{
                            transition: "350ms ease-in-out",
                            objectFit: "cover",
                            maxWidth: "100%",
                            cursor: "pointer",
                            display: "flex",
                        }}
                        onClick={() => handleImageClick(image.src)} />
                </div>
            )}
        </>
    );
}