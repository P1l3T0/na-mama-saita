import { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export function Header() {
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
                top: isBlur ? "0" : "static",
                position: isBlur ? "sticky" : "relative",
                zIndex: "10000",
                backgroundColor: isBlur ? "transparent" : "none",
                backdropFilter: isBlur ? 'blur(7px)' : 'blur(0)'
            }}>
                <div className='header-div' style={{ padding: isBlur ? "0" : ".5rem 0" }}>
                    <div className="logo">
                        <CustomLink to="/"><img src="./pictures/logo.webp" alt="Logo" /></CustomLink>
                    </div>
                    <nav>
                        <ul id="side-menu" style={{ top: isMenuOpen ? '0' : '-90rem', transition: '1.5s ease' }}>
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
}

function CustomLink({ to, children, ...props }) { //! Tazi fynkciq trqbva da e sled returnatiq html shototo 
    const resolvedPath = useResolvedPath(to);     //! kara logoto da flickerva (nqmam si ideq kak e related dori)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <>
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        </>
    );
}