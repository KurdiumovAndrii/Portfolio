import "./style.css";

import gitHub from "./../../img/icons/gitHub.svg";
import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

function Footer () {
    return (  
<footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/kurdiumovandrey/"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/KurdiumovAndrii"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/andrii-kurdiumov-694564247/"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;