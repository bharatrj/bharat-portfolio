import React from "react";
import '../assets/css/contact.css'

function Contact() {

  return (
    <React.Fragment>
      <section class="contact-section">
        <h2>🤝 Contact</h2>
        <p class="subtitle">Feel free to contact me for your needs related IT solutions</p>

        <div class="row info-row">
          <div class="col-6">
            <div class="row">
              <i class="fas fa-map-marker-alt col-1"></i>
              <div className="col-11">
                <h3>Address</h3>
                <p>Bhavnagar, Gujarat, India 364001</p>
              </div>
            </div>

            <div class="row">
              <i class="fas fa-phone col-1"></i>
              <div className="col-11">
                <h3>Call Us</h3>
                <p>+91 7698 780126</p>
              </div>
            </div>

            <div class="row">
              <i class="fas fa-envelope col-1"></i>
              <div className="col-11">
                <h3>Email Us</h3>
                <p>bharatjograna@hotmail.com</p>
              </div>
            </div>

            <div class="map">
              <iframe
                src="https://www.google.com/maps?q=Bhavnagar,%20Gujarat,%20India%20364001&output=embed"
                width="100%" height="200" style={{ border: "0" }} allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>

          <form class="col-6">
            <div class="row">
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
