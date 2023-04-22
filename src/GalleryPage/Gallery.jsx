import { useState } from "react";

export function Gallery() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState("");

    function handleImageClick(src) {
        setShowPopup(true);
        setPopupImageSrc(src);
    };

    function handleCloseClick() {
        setShowPopup(false);
    };

    return (
        <>
            <div className="container">
                <h1>Галерия</h1>
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

            <div
                className="popup-image"
                style={{ display: showPopup ? "block" : "none" }}
            >
                <span onClick={handleCloseClick}>&times;</span>
                <Image src={popupImageSrc} alt="alt pic 1" />
            </div>
        </>
    );
}

function Image({ src, alt, handleImageClick }) {
    return (
        <>
            <div className="image">
                <img src={src} alt={alt} onClick={() => handleImageClick(src)} />
            </div>
        </>
    );
}