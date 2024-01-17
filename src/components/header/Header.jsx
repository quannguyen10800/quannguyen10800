import {useState} from "react";

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuItem, setMenuItem] = useState("PersonalIntro");

    function clickMenu() {
        setMenuOpen(!menuOpen);
    }

    function selectMenuItem(e, menuItem) {
        e.preventDefault();
        setMenuOpen(false);
        setMenuItem(menuItem);
        props.selectMenuItem(menuItem);
    }

    return (
        <header id="header" className={`header header-fixed ${menuOpen ? "body-menu-opened" : "body-menu-close"}`}>
            <div className="header-bg"/>
            <div className="container-fluid clearfix">
                <div className="brand">
                    <a href="#">
                        <div className="brand-name font-custom">Quan Nguyen</div>
                    </a>
                </div>

                <button className="nav-toggle-btn a-nav-toggle" onClick={clickMenu}>
            <span className="nav-toggle">
              <span className="stick stick-1"/>
              <span className="stick stick-2"/>
            </span>
                </button>

                <div className="header-content d-none d-md-block">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="header-tagline">Web Developer<br/> Frontend</div>
                        </div>
                        <div className="col-md-9">
                            <div className="header-contacts">
                                <div className="header-contact-item">Call me.&nbsp;
                                    +1(514)-983-1008</div>
                                <div className="header-contact-divider">/</div>
                                <div className="header-contact-item">bibonguyen14@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hide-menu a-nav-toggle"/>

            <div className="menu">
                <nav className="menu-main" id="accordion">
                    <ul id="menuMain">
                        <li className={`${menuItem === 'PersonalIntro' ? 'active' : ''}`}>
                            <a href='#Intro' onClick={(e) => selectMenuItem(e, "PersonalIntro")}>Intro</a>
                        </li>
                        <li className={`${menuItem === 'PersonalSkill' ? 'active' : ''}`}>
                            <a href="#Skills" onClick={(e) => selectMenuItem(e, "PersonalSkill")}>Skills</a>
                        </li>
                        <li className={`${menuItem === 'PersonalExperience' ? 'active' : ''}`}>
                            <a href="#Experience" onClick={(e) => selectMenuItem(e, "PersonalExperience")}>Experience</a>
                        </li>
                    </ul>
                </nav>

                <div className="menu-footer">
                    <ul className="social social-rounded">
                        <li><a href="https://www.linkedin.com/in/sol7/">Linkedin</a></li>
                        <li><a href="https://github.com/quannguyen10800">Github</a></li>
                    </ul>
                    <div className="menu-copyright">&copy; QuanNguyen 2022<br/> All Rights Reserved</div>
                </div>
            </div>
        </header>
    )
}

export default Header;