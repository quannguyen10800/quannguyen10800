function PersonalSkill() {
    return (
        <div className={`section pp-scrollable slide-personal-services pp-section pp-easing active`}>
            <div className="slide-container">
                <div className="slide-bg">
                    <div className="slide-photo circle-light slide-services-circle2 transformLeft"/>
                    <div className="slide-photo circle-brown slide-services-circle1 transformRight"/>
                </div>
                <div className="container">
                    <div className="slide-num">2</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="animate-element delay5 fadeInDown">
                                <h2 className="slide-title slide-title-personal-services slide-title-lg">1</h2>
                                <div className="d-md-none">
                                    <div className="slide-title-sub slide-title-sub-sm">YEAR EXPERIENCE</div>
                                    <div className="slide-descr slide-descr-personal-services font-italic">
                                        *Crafting beautiful websites using modern technology
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h3 className="slide-title-info animate-element delay5 fadeInDown">I'm currently studying and training
                                <span className="text-primary">on the following skills.</span>
                            </h3>
                        </div>
                    </div>

                    <div className="row animate-element delay5 fadeInUp">
                        <div className="col-md-4 d-none d-md-block">
                            <div className="slide-title-sub slide-title-sub-sm">YEARS
                                <div className="d-none d-md-block"/>
                                EXPERIENCE
                            </div>
                            <div className="slide-descr slide-descr-personal-services font-italic">
                                *Crafting beautiful websites using modern technology
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="service-list row">
                                <div className="col-md-6">
                                    <div className="service-item">
                                        <div className="service-item-title slide-title-sub">ReactJS</div>
                                        <div className="service-item-descr slide-descr">Develop frontend website using React & Javascript
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="service-item">
                                        <div className="service-item-title slide-title-sub">Programming languages</div>
                                        <div className="service-item-descr slide-descr">
                                            <ul>
                                                <li>C++</li>
                                                <li>Java (8 and 11)</li>
                                                <li>Javascript</li>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="service-item">
                                        <div className="service-item-title slide-title-sub">Others</div>
                                        <div className="service-item-descr slide-descr">
                                            <ul>
                                                <li>Git</li>
                                                <li>OOP</li>
                                                <li>JUnit Unit test for Java</li>
                                                <li>Wordpress & WooCommerce</li>
                                                <li>Jest unit test with Javascript</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="service-item">
                                        <div className="service-item-title slide-title-sub">Languages</div>
                                        <div className="service-item-descr slide-descr">
                                            <ul>
                                                <li>
                                                    English
                                                </li>
                                                <li>Russian</li>
                                                <li>Vietnamese</li>
                                                <li>French (Beginner)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalSkill;