import React from 'react';
import introImage from "../images/intro-Img.png";
import oneicon from "../images/l-ico.png";

export default function Intro() {
  return (
    <section className="intro">
        <div className="wrapper">
            <p className="text-center smCol">At Damansara Chiropractic, we're dedicated to helping you live your best life through safe, natural, and non-invasive treatments.</p>
            <div className="sec-wrapper">
                <div className="sec-Left">
                    <img src={introImage} alt="" />
                </div>
                <div className="sec-Right">
                    <figure><img src={oneicon} alt="" /></figure>
                    <p>Our team of experienced chiropractors understands that pain and discomfort can have a significant impact on your quality of life, which is why we're here to help you get back to feeling your best. </p>
                    <p>With our personalized approach to care, we'll work with you to develop a treatment plan that's tailored to your specific needs and goals.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
