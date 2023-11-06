import React from "react";
import AssembleNav from "../../Components/Navbar/Navbar";
import "./Team.scss";
import Footer from "../../Components/Footer/Footer";
import drstarange from "../../assets/images/drstrange.jpg"
import deadpool from "../../assets/images/deadpool.avif"
import pxfuel from "../../assets/images/pxfuel.jpg"

const Team = () => {
    return (
        <div>
            <AssembleNav />
            <div className="section-hero">
                <div className="section-container">
                    <div className="section">
                        <div className="section-head">Meet The Avengers</div>
                        <div className="section-content">
                            These heroic developers and maintainers, like the Avengers,
                            assemble to build and safeguard AssembleScript.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-hero-2">
                <div className="section-container">
                    <div className="second-section">
                        <div className="left-div">
                            <div className="left-div-heading">Developers</div>
                            <div className="left-div-content">
                                Our skilled language maintainers wield their coding prowess,
                                while our visionary website designer weaves web magic—united,
                                they bring AssembleScript to life!
                            </div>
                        </div>
                        <div className="right-div">
                            <div className="home-container">
                                <div className="profile-card">
                                    <div className="img">
                                        <img src={drstarange} />
                                    </div>
                                    <div className="caption">
                                        <h3>Sahil Kandhare</h3>
                                        <p>Full Stack Developer</p>
                                        <div className="social-links">
                                            <a target="_blank" href="https://github.com/SahilK-027">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/sahil-kandhare-661b99226/"
                                            >
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            {/* <a target="_blank" href="https://github.com/SahilK-027">
                        <i className="fa-brands fa-instagram"></i>
                      </a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-card">
                                    <div className="img">
                                        <img src={deadpool} />
                                    </div>
                                    <div className="caption">
                                        <h3>Shashank B</h3>
                                        <p>Full Stack Developer</p>
                                        <div className="social-links">
                                            <a
                                                target="_blank"
                                                href="https://github.com/shashankbhosagi"
                                            >
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/shashank-bhosagi-8b9432206/"
                                            >
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://www.instagram.com/shashank_bhosagi/"
                                            >
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
