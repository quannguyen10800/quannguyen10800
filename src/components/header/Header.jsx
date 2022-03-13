import {useState} from "react";

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    function clickMenu() {
        setMenuOpen(!menuOpen);
    }
    function selectMenuItem(e, menuItem) {
        e.preventDefault();
        setMenuOpen(false);
        props.selectMenuItem(menuItem);
    }
    return (
        <header id="header" className={`header header-fixed ${menuOpen ? "body-menu-opened" : "body-menu-close"}`}>
            <div className="header-bg"/>
            <div className="container-fluid clearfix">
                <div className="brand">
                    <a href="#Intro">
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
                                <div className="header-contact-item">Call me.&nbsp; <a href="tel:+151498310081"
                                                                                       className="phone-link">
                                    +1(514)9831008</a></div>
                                <div className="header-contact-divider">/</div>
                                <div className="header-contact-item"><a href="mailto:bibonguyen1478@gmail.com"
                                                                        className="mail-link">bibonguyen1478@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hide-menu a-nav-toggle"/>

            <div className="menu">
                <div className="menu-lang">
                    <a href="#" className="menu-lang-item active">Eng</a>
                    <a href="#" className="menu-lang-item">fra</a>
                    <a href="#" className="menu-lang-item">ger</a>
                </div>

                <nav className="menu-main" id="accordion">
                    <ul id="menuMain">
                        <li data-menuanchor="Intro" className="active"><a href='#'
                                                                          onClick={(e) => selectMenuItem(e, "PersonalIntro")}>Intro</a></li>
                        <li data-menuanchor="Services"><a href="#" onClick={(e) => selectMenuItem(e, "PersonalSkill")}>Skills</a></li>
                        <li data-menuanchor="Projects"><a href="#Projects">Projects</a></li>
                        <li data-menuanchor="Awards"><a href="#Awards">Awards</a></li>
                        <li data-menuanchor="Experience"><a href="#Experience">Experience</a></li>
                        <li data-menuanchor="Clients"><a href="#Clients">Clients</a></li>
                        <li data-menuanchor="Testimonials"><a href="#Testimonials">Testimonials</a></li>
                        <li data-menuanchor="Contact"><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="menu-footer">
                    <ul className="social social-rounded">
                        <li><a href="#"><i className="lni lni-twitter-filled"/></a></li>
                        <li><a href="#"><i className="lni lni-behance-original"/></a></li>
                        <li><a href="#"><i className="lni lni-instagram-original"/></a></li>
                    </ul>
                    <div className="menu-copyright">&copy; QuanNguyen 2022<br/> All Rights Reserved</div>
                </div>
            </div>
        </header>
    )
}

export default Header;