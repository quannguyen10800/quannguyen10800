function PersonalIntro() {
    return (
        <div className={`section pp-scrollable slide-dark slide-dark-footer slide-personal-intro pp-section pp-easing active`}>
            <div className="slide-container">
                <div className="slide-bg">
                    <div className="slide-photo circle-golden slide-intro-circle1 transformLeft"/>
                    <div className="slide-photo circle-brown slide-intro-circle2 transformRight"/>
                    <div className="slide-photo slide-intro-man"/>
                </div>
                <div className="container">
                    <div className="slide-num">1</div>
                    <div className="row">
                        <div className="col-sm-6 col-10">
                            <h1 className="slide-title animate-element delay5 fadeInDown">Quan Nguyen</h1>
                            <div className="animate-element delay5 fadeInUp">
                                <h3 className="slide-title-sub">Javascript &amp; React, Angular Frontend Website Developer</h3>
                                <div className="slide-descr slide-descr-intro"> I'm Quan Nguyen, a third-year Computer Science student in
                                    Concordia University, Montreal Quebec Canada. I'm seeking for an internship opportunity.
                                </div>
                                <div className="slide-btn">
                                    <button className="btn btn-success" data-toggle="modal"
                                            data-target="#send-request">get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalIntro;