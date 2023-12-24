import React from 'react';

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return ( 
    <section className="footer">
        <div className="wrapper">
            <p>© {year} Damansara Chiropractic</p>
        </div>
    </section>
  );
}
