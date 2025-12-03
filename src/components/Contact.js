import React from "react";
import '../assets/css/contact.css'

function Contact() {

  return (
    <React.Fragment>
      <section id="contact" className="contact-section">
        <h2>🤝 Contact</h2>
        <p className="subtitle">Feel free to contact me for your needs related IT solutions</p>

        <div className="row info-row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              <i className="fas fa-map-marker-alt col-1"></i>
              <div className="col-11">
                <h3>Address</h3>
                <p>Bhavnagar, Gujarat, India 364001</p>
              </div>
            </div>

            <div className="row">
              <i className="fas fa-phone col-1"></i>
              <div className="col-11">
                <h3>Call Us</h3>
                <p>+91 7698 780126</p>
              </div>
            </div>

            <div className="row">
              <i className="fas fa-envelope col-1"></i>
              <div className="col-11">
                <h3>Email Us</h3>
                <p>bharatjograna@hotmail.com</p>
              </div>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=Bhavnagar,%20Gujarat,%20India%20364001&output=embed"
                width="100%" height="200" style={{ border: "0" }} allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>

          <form className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              <input className="col-6" type="text" placeholder="Your Name" required />
              <input className="col-6" type="email" placeholder="Your Email" required />
              <input className="col-12" type="text" placeholder="Subject" required />
              <textarea className="col-12" rows="6" placeholder="Message" required></textarea>
              <button className="col-6" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
