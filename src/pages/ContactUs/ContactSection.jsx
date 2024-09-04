import React from "react";
import "./contactus.css";
import { LuStore } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";

const ContactCard = ({ Icon, title, text }) => (
<div className="card">
  <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
    <Icon className="contact-icon mb-3" />
    <span className="card-title">{title}</span>
    <p className="card-text">{text}</p>
  </div>
</div>

);

const ContactSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <h1 className="text-center">Contact Us</h1>
          <div className="card-section">
          <ContactCard
            Icon={LuStore}
            title="ADDRESS"
            text="234, Maryland, Ikeja, Lagos State."
          />
          <ContactCard
            Icon={HiOutlinePhone}
            title="CONTACT US"
            text="+234 8177 980 456"
          />
          <ContactCard
            Icon={IoMailOutline}
            title="EMAIL"
            text="hello@vescan.com"
          />
          </div>

          <div className="contact-apply">
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="sendMessage">Send Message</button>
            </form>
            <div className="dframer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.131562657938!2d3.3607423444150344!3d6.576353473668302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9271ea07192b%3A0xeb61868a07fcf71c!2sMaryland%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725413864426!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default ContactSection;
