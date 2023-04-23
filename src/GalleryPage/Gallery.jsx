import { useState } from "react";

export function Gallery() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState("");

    function handleImageClick(src) {
        setShowPopup(true);
        setPopupImageSrc(src);
    };

    function handleCloseClick(event) {
        if (event.target.classList.contains("popup-image") && !event.target.classList.contains("image"))
            setShowPopup(false);
    }


    return (
        <>
            <div className="container">
                <h1 className="title">Галерия</h1>
                <div className="image-container">
                    <Image src="https://picsum.photos/400/300?random=1" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=2" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=3" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=4" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=5" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=6" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=7" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=8" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=9" alt="alt pic 1" handleImageClick={handleImageClick} />
                    <Image src="https://picsum.photos/400/300?random=10" alt="alt pic 1" handleImageClick={handleImageClick} />
                </div>
            </div>

            <div className="whole-div" onClick={() => handleCloseClick(event)}>
                <div
                    className="popup-image"
                    style={{ display: showPopup ? "block" : "none" }}
                >
                    <Image src={popupImageSrc} alt="alt pic 1" />
                </div>
            </div>
        </>
    );
}

function Image({ src, alt, handleImageClick }) {
    return (
        <>
            <div className="image">
                <img
                    src={src}
                    alt={alt}
                    onClick={() => handleImageClick(src)}
                />
            </div>
        </>
    );
}