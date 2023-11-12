import { useState } from "react";
import Image from "./Image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState("");

    function handleImageClick(src) {
        setShowPopup(true);
        setPopupImageSrc(src);
    }

    function handleCloseClick(event) {
        if (event.target.classList.contains("popup-image") || event.key == "Escape") {
            setShowPopup(false);
        }
    }

    document.addEventListener('keydown', handleCloseClick);

    return (
        <>
            <div className="gallery-container">
                <h1 className="title">Галерия</h1>
                <Image handleImageClick={handleImageClick} />
            </div>

            <div className="whole-div" onClick={() => handleCloseClick(event)}>
                <div className="popup-image" style={{ display: showPopup ? "block" : "none" }}>
                    <LazyLoadImage src={popupImageSrc} />
                </div>
            </div>
        </>
    );
};

export default Gallery;