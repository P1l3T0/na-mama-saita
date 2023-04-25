import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export function Gallery() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState("");

    function handleImageClick(src) {
        setShowPopup(true);
        setPopupImageSrc(src);
    };

    function handleCloseClick(event) {
        if (event.target.classList.contains("popup-image"))
            setShowPopup(false);
    }

    return (
        <>
            <div className="gallery-container">
                <h1 className="title">Галерия</h1>
                <div className="image-container">
                    <Image src="./pictures/galleryPictures/rabotilnica1.webp" alt="laboratoriq" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/rabotilnica2.webp" alt="laboratoriq" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/rabotilnica3.webp" alt="laboratoriq" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/rabotilnica4.webp" alt="laboratoriq" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/d3Kolej2017-1.webp" alt="sus stydenti" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/d3Kolej2017-2.webp" alt="sus stydenti" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/d3Kolej2022.webp" alt="sus stydenti" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/d3Magistri2021.webp" alt="magistri2021" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/d3Magistri2022.webp" alt="magistri2022" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/diplomniZashtiti2020-1.webp" alt="diplomni zashtiti 2020" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/diplomniZashtiti2020-2.webp" alt="diplomni zashtiti 2020" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/diplomniZashtiti2020-3.webp" alt="diplomni zashtiti 2020" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/diplomniZashtiti2020-4.webp" alt="diplomni zashtiti 2020" handleImageClick={handleImageClick} />
                    <Image src="./pictures/galleryPictures/diplomniZashtiti2020-5.webp" alt="diplomni zashtiti 2020" handleImageClick={handleImageClick} />
                </div>
            </div>

            <div className="whole-div" onClick={() => handleCloseClick(event)}>
                <div
                    className="popup-image"
                    style={{ display: showPopup ? "block" : "none" }}
                >
                    <LazyLoadImage src={popupImageSrc} />
                </div>
            </div>
        </>
    );
}

function Image({ src, alt, handleImageClick }) {
    return (
        <>
            <div className="image">
                <LazyLoadImage
                    src={src}
                    alt={alt}
                    effect="blur"
                    style={{
                        transition: "350ms ease-in-out",
                        objectFit: "cover",
                        maxWidth: "100%",
                        cursor: "pointer",
                        display: "flex"
                    }}
                    onClick={() => handleImageClick(src)} />
            </div>
        </>
    );
}
