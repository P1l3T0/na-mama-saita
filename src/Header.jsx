import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(true);
    };

    function closeMenu() {
        setMenuOpen(false);
    };

    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
        <>
            <header>
                <div className="logo">
                    <a href="index.html"><img src="./pictures/logo.png" alt="Logo" /></a>
                </div>
                <nav>
                    <ul
                        id="side-menu"
                        style={{ top: isMenuOpen ? '0' : '-80rem', transition: '1.5s ease' }}
                    >
                        <div className="burger-div">
                            <li><a href="about.html">За нас</a></li>
                            <li><a href="#">Галерия</a></li>
                            <li><a href="#">Контакти</a></li>
                            <li><a href="#">Бивши възпитаници</a></li>
                        </div>
                        <FontAwesomeIcon
                            icon={faXmarkSquare}
                            onClick={closeMenu}
                            className='icon'
                        />
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={openMenu}
                        className='icon'
                    />
                </nav>
            </header>
        </>
    );
}