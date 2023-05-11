import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

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
                            <li><a href="http://www.tu-sliven.com/" target="_blank">ТУ София, Колеж Сливен</a></li>
                            <li><a href="https://www.tu-sofia.bg/" target="_blank">ТУ София</a></li>
                        </ul>
                    </div>
                    <div className="column3">
                        <h1>Контакти</h1>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faPaperPlane} /><span>msivova@tu-sofia.bg</span></li>
                            <li><FontAwesomeIcon className='icon' icon={faPaperPlane} /><span>tannna.peneva@tu-sofia.bg</span></li>
                            <li><a href="https://www.facebook.com/TDMMI.PTOT" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className='icon' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <h1>Copyright© Pileshkiq &amp; TU Sofia, College Sliven, All rights recieved</h1>
                </div>
            </footer>
        </>
    );
}