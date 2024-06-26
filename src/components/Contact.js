import React from 'react';
import damansarac from '../images/damansara-chiropractic.png';
import damansaracLogo from "../images/damansara-chiropractic-logo.png"
import whatsapp from "../images/Whatsapp.png";
import map from "../images/map.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
       
        <div className="wrapper">
        <p> <a href="#scrolltop">
                    <span className="logo"><img src={damansaracLogo} alt="" /></span>
                    <img src={damansarac} alt="damansarac" className="logo logiImage"  />
                </a>
            </p>
            {/* <p>If you're ready to take the first step towards a healthier, more vibrant life, contact us today to schedule an appointment.</p> */}
            <p>We'll be happy to answer any questions you may have about our services and help you get started on your journey towards optimal health and wellness.</p>
            <div className="contacwrap">
                <a
                    href="https://wa.me/60176326079"
                    target="_blank"
                    rel="noreferrer"
                >  
                    <figure><img src={whatsapp} alt="" /></figure> 
                </a>
                <h2>Enquiries . Appointments
                    <span>
                        <a
                            href="https://wa.me/60176326079"
                            target="_blank"
                            rel="noreferrer"
                        >  017-632 6079 </a>
                    </span>
                </h2>
                    
                <p > Operating Hours<br/>MON - SAT : 10am - 5pm<br/>SUN/PUBLIC HOLIDAYS : CLOSED</p>
            </div>
        </div>
        {/* <div className="map">
            <img src={map} alt="" />
        </div> */}
    </section>
  );
}
