import { useState } from "react";
import Image from "./Image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState("");

  const handleImageClick = async (src) => {
    setShowPopup(true);
    setPopupImageSrc(src);
  };

  const handleCloseClick = async (e) => {
    if (e.target.classList.contains("popup-image") || e.code == "Escape") {
      setShowPopup(false);
    }
  };

  const handleButtonClick = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  document.addEventListener('keydown', handleCloseClick);

  return (
    <>
      <div className="gallery-container">
        <h1 className="title">Галерия</h1>
        <Image handleImageClick={handleImageClick} />
      </div>

      <div className="whole-div" onClick={(e) => handleCloseClick(e)}>
        <div className="popup-image" style={{ display: showPopup ? "block" : "none" }}>
          <LazyLoadImage src={popupImageSrc} />
        </div>
      </div>

      <div className="floating-button" onClick={() => handleButtonClick()}>
        <FontAwesomeIcon icon={faArrowUpLong} className="icon" />
      </div>
    </>
  );
};

export default Gallery;