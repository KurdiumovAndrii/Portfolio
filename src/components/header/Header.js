import "./style.css";
import Me1 from './../../img/about/Me1.jpg'
import CV from './../utilities/Andrii_Kurdiumov_CV_English.pdf'

function Header () {
    return (  
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
            <img src={Me1} alt=""/>
                <strong>Hello, my name is <em>Andrii Kurdiumov</em></strong><br />
                Im student of computer science
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href={CV} className="btn">Download CV</a>
        </div>
    </header>
    )
}
 
export default Header;