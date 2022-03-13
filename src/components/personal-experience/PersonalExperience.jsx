function PersonalExperience() {
    return (
        <div className="section pp-scrollable slide-dark slide-personal-experience pp-section pp-easing active">
            <div className="slide-container">
                <div className="container">
                    <div className="slide-num">1</div>
                    <div className="row align-items-center mb-4 animate-element delay5 fadeInDown">
                        <div className="col-8">
                            <h2 className="slide-title mb-0">experience</h2>
                        </div>
                        <div className="col-4 text-right">
                            <div className="a-carousel-nav carousel-nav"/>
                        </div>
                    </div>
                    <div className="animate-element delay5 fadeInUp">
                        <div className="carousel-experience a-carousel-experience owl-carousel owl-theme" style={{display: "block"}}>
                            <div className="experience-list">
                                <div className="experience-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="experience-item-date">May 2020 - April 2021</div>
                                            <div
                                                className="experience-item-company slide-title-sub company-blue">Vanntechs Web Studio
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-item-title slide-title-sub"> IT Intern & Part-time
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-item-descr slide-descr">
                                                <ul>
                                                    <li> Accomplished the deep understanding on Wordpress and Woocommerce, with plugins integrations by
                                                    completing 4 Wordpress website projects.</li>
                                                    <li>
                                                        Worked as a business analyst to communicate what clients need and require, with the outsourced team located
                                                        in India, Philipine and Dominican Republic.
                                                    </li>
                                                    <li>
                                                        Kept track the project timeline and updated to the company's internal Trello board and the client's Trello board.
                                                    </li>
                                                    <li>
                                                        Projects I completed: <a href="htpps://archisystems.com">Darchi System</a>, <a href="https://huongxua-anjou.com">HuongXua restaurant</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-btn">
                            <a href="https://quannguyen10800.github.io/quannguyen10800/resume-quan-nguyen.pdf" className="btn btn-success"><i className="lni lni-download mr-3"></i>download my
                                cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalExperience;