import React from 'react';
import introImage from "../images/intro-Img.png";

export default function Team() {
  return (
    <section className="team" id="team" data-offset="100">
        <div className="wrapper">
            <h2>Meet our Team</h2>
            <div className="temWrap">
                <div className="temLeft">
                    <h3>Dr Kenny Lim <span>Chiropractor (IMU)</span></h3>
                    <p>Graduated from IMU from one of the pioneering chiropractic batches in IMU, Dr Kenny has over 10 years of experience in providing safe, effective, and non-invasive chiropractic care.  </p>
                    <p>He is passionate about helping his patients achieve optimal health and wellness through a holistic approach to care that takes into account all aspects of their well-being. </p>
                    <p>Understanding that healthcare and medical conditions can be intimidating at times, he uses a more down-to-earth approach to and explains things very straightforwardly and aims to provide honest and unbiased opinions to patients to help them make informed decisions about their health and wellness.</p>
                    <p>His special interest is in strength and conditioning. In his free time, he can be found in the gym, which is his natural habitat.</p>
                </div>
                <div className="temRight">
                    <img src={introImage} alt="" />
                </div>
            </div>

        </div>
    </section>
  );
}
