import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-content">
                    <div className="column1">
                        <img src="./pictures/logo.webp" alt="Logo" />
                        <h1>ТУ София, Колеж Сливен</h1>
                        <p>Технологии, дизайн и мениджмънт на модната индустрия</p>
                    </div>
                    <div className="column2">
                        <h1>"Полезни" линкове</h1>
                        <ul>
                            <li><a href="http://tu-sliven.com/" target="_blank">ТУ София, Колеж Сливен</a></li>
                            <li><a href="https://www.tu-sofia.bg/" target="_blank">ТУ София</a></li>
                        </ul>
                    </div>
                    <div className="column3">
                        <h1>Контакти</h1>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faPaperPlane} /><span>msivova@tu-sofia.bg</span></li>
                            <li><FontAwesomeIcon className='icon' icon={faPaperPlane} /><span>tannna.peneva@tu-sofia.bg</span></li>
                            <div className="icons">
                                <li>
                                    <a href="https://www.facebook.com/TDMMI.PTOT" alt="facebook" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@-tdmmi/featured" alt="youtube" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className='icon' /></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <h1>Copyright© 2023
                        <a style={{ textDecoration: "none" }} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Pileshkiq </a>&amp; TU Sofia
                    </h1>
                </div>
            </footer>
        </>
    );
}