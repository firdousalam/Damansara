import React from 'react';
import oneicoPng from "../images/l-ico.png";
import thumb from "../images/thumb.png";

export default function Testimonial() {
  return (
    <section className="review" id="testimonials" data-bs-offset="100">
        <div className="wrapper">
            <div className="reviewTop">
                <figure><img src={oneicoPng} alt="" /></figure>
                <p>We're proud of the positive feedback we've received from our patients over the years. Read firsthand accounts of how chiropractic care has helped our patients achieve their health and wellness goals.</p>
            </div>
            <div className="cardWrap">
                <div className="rcard">
                    <figure><img src={thumb} alt="" /></figure>
                    <p className="username">Google Username</p>
                    <span className="starsec">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </span>
                    <p>Kenny has been very helpful throughout the few sessions i had and also explain my condition to me clearly and what can be done to manage it better. Treatments</p>
                    <a href="#" className="more">Read more</a>
                </div>
                <div className="rcard">
                    <figure><img src={thumb} alt="" /></figure>
                    <p className="username">Google Username</p>
                    <span className="starsec">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </span>
                    <p>Kenny has been very helpful throughout the few sessions i had and also explain my condition to me clearly and what can be done to manage it better. Treatments were quick and he walks me through it and manages my expectations, so I know what to expect. I have lesser issues with my lower back issues and less tense shoulders now. Overall experience has been good, and would come back again for treatment/ maintenance.</p>
                    {/*<a href="#" className="more">Read more</a> --> */}
                </div>
                <div className="rcard">
                    <figure><img src={thumb} alt="" /></figure>
                    <p className="username">Google Username</p>
                    <span className="starsec">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </span>
                    <p>Kenny has been very helpful throughout the few sessions i had and also explain my condition to me clearly and what can be done to manage it better. Treatments</p>
                    <a href="#" className="more">Read more</a>
                </div>
                <div className="rcard">
                    <figure><img src={thumb} alt="" /></figure>
                    <p className="username">Google Username</p>
                    <span className="starsec">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </span>
                    <p>Kenny has been very helpful throughout the few sessions i had and also explain my condition to me clearly and what can be done to manage it better. Treatments</p>
                    <a href="#" className="more">Read more</a>
                </div>
            </div>
        </div>
    </section>
  );
}
