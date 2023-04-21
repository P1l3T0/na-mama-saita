import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function setMenu() {
        setMenuOpen(!isMenuOpen);
    };

    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/"><img src="./pictures/logo.png" alt="Logo" /></Link>
                </div>
                <nav>
                    <ul
                        id="side-menu"
                        style={{ top: isMenuOpen ? '0' : '-80rem', transition: '1.5s ease' }}
                    >
                        <div className="burger-div">
                            <CustomLink to="/about">За нас</CustomLink>
                            <CustomLink to="/gallery">Галерия</CustomLink>
                            <CustomLink to="/contacts">Контакти</CustomLink>
                            <CustomLink to="/former-graduates">Бивши възпитаници</CustomLink>
                        </div>
                        <FontAwesomeIcon
                            icon={faXmarkSquare}
                            onClick={setMenu}
                            className='icon'
                        />
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={setMenu}
                        className='icon'
                    />
                </nav>
            </header>
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <>
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        </>
    );
}