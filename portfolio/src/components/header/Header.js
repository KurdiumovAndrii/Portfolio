import "./style.css";

function Header () {
    return (  
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hello, my name is <em>Andrii Kurdiumov</em></strong><br />
                Im student of computer science
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>
    )
}
 
export default Header;