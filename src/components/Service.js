import React from 'react';
import thumbone from "../images/thumb1.png";
import cote from "../images/cote.png";
import introImage from "../images/intro-Img.png";

export default function Service() {
  return (
    <section className="services" id="services">
        <div className="wrapper">
            <h2>Our Services</h2>
            <p className="sm-col">We offer a comprehensive range of chiropractic services to address a variety of conditions and concerns. </p>
            <div className="services-wrapper">
                <div className="sItem">
                    <figure><img src={thumbone} alt="" /></figure>
                    <p><strong>Chiropractic adjustments</strong> being the mainstay of the treatment is a safe and effective way to improve mobility and relieve pain in the back, neck, and joints.</p>
                </div>
                <div className="sItem">
                    <figure><img src={thumbone} alt="" /></figure>
                    <p><strong>Soft tissue therapy</strong>, such as trigger point therapy, cross-friction therapy and stretches can help reduce muscle tension and improve flexibility.</p>
                </div>
                <div className="sItem">
                    <figure><img src={thumbone} alt="" /></figure>
                    <p><strong>Corrective exercises</strong>, a part of essential chiropractic care that can help strengthen weak areas of the body and improve overall function.</p>
                </div>
                <div className="sItem">
                    <figure><img src={thumbone} alt="" /></figure>
                    <p><strong>Electrotherapeutic modalities</strong> such as therapeutic ultrasound is also used on areas such of tendinitis such as Golfer's/Tennis elbow (medial/lateral epicondylitis) which is proven to be very effective for such conditions.</p>
                </div>                                                
            </div>
            <h2>Conditions We Treat</h2>
            <div className="crow">
                <div className="col-l">
                    <p>Chiropractic care can be helpful for a wide range of conditions, including low back pain, neck pain, headaches, sciatica, sports injuries, carpal tunnel syndrome, and more. </p>
                </div>
                <div className="col-r">
                    <p>We believe in taking a whole-person approach to care, which means that we'll work with you to identify the underlying causes of your pain or discomfort.</p>
                </div>
            </div>
        </div>
        <div className="fullWrap">
            <div className="colLeft">
                <img src={introImage} alt="" />
            </div>
            <div className="colRight">
                <img src={cote} alt="" />
                <p>By addressing these root issues, we can help you achieve long-term relief and improved overall wellness.</p>

            </div>
        </div>            
    </section>
  );
}
