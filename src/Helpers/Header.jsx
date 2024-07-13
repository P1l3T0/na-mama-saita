import CustomLink from './CustomLink';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBlur, setBlur] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const threshold = 1;
      setBlur(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function setMenu() {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header style={{
        zIndex: "10000",
        top: isBlur ? "0" : "static",
        position: isBlur ? "sticky" : "relative",
        backgroundColor: isBlur ? "transparent" : "none",
        backdropFilter: isBlur ? 'blur(7px)' : 'blur(0)',
        WebkitBackdropFilter: isBlur ? 'blur(7px)' : 'blur(0)' //! Used to enable blur on iOS devices
      }}>
        <div className='header-div' style={{ padding: isBlur ? "0" : ".5rem 0" }}>
          <div className="logo">
            <CustomLink to="/"><img src="./pictures/logo.webp" alt="Logo" /></CustomLink>
          </div>
          <nav>
            <ul id="side-menu" style={{
              top: isMenuOpen ? '0' : '-90rem',
              transition: '1.5s ease'
            }}>
              <div className="burger-div">
                <CustomLink to="/about">За нас</CustomLink>
                <CustomLink to="/gallery">Галерия</CustomLink>
                <CustomLink to="/students">Студенти</CustomLink>
                <CustomLink to="/former-graduates">Възпитаници</CustomLink>
                <div className="tu-logo-div">
                  <img src="/pictures/tu-sofia.webp" className='tu-logo' />
                </div>
              </div>
              <FontAwesomeIcon icon={faXmarkSquare} onClick={setMenu} className='icon' />
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={setMenu} className='icon' />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;