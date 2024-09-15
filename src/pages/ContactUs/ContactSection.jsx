import { LuStore } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import PropTypes from "prop-types";
const ContactCard = ({ Icon, title, text }) => (
  <motion.div
    className="contact-card rounded-3 py-5 "
    whileHover={{ scale: 1.02 }}
    style={{
      backgroundColor: "var(--light-gray)",
    }}
  >
    <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
      <Icon className="contact-icon mb-3" />
      <span className="card-title lh-base">{title}</span>
      <p className="card-text lh-lg">{text}</p>
    </div>
  </motion.div>
);

ContactCard.propTypes = {
  Icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
};
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="">
          <motion.h1
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <div className="section__body">
            <div className="card-section row mb-4">
              <div className="col-12 col-lg-4">
                <ContactCard
                  Icon={LuStore}
                  title="ADDRESS"
                  text="234, Maryland, Ikeja, Lagos State."
                />
              </div>
              <div className="col-12 col-lg-4">
                <ContactCard
                  Icon={HiOutlinePhone}
                  title="CONTACT US"
                  text="+234 8177 980 456"
                />
              </div>
              <div className="col-12 col-lg-4">
                <ContactCard
                  Icon={IoMailOutline}
                  title="EMAIL"
                  text="hello@vescan.com"
                />
              </div>
            </div>

            <motion.div
              className="contact-apply d-flex flex-column-reverse flex-lg-row gap-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <form
                id="contact-us__form"
                className="flex-column w-100 d-flex gap-4"
              >
                <div className="">
                  <label
                    htmlFor="contact-us__name-input"
                    className="contact-us__form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-us__name-input"
                    className="contact-us__input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="contact-us__email-input"
                    className="contact-us__form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-us__email-input"
                    className="contact-us__input"
                    placeholder="Your Email"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="contact-us__message"
                    className="contact-us__form-label"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    id="contact-us__message"
                    className="contact-us__text-area"
                  ></textarea>
                </div>
                <motion.div
                  className="sendMessage text-center text-lg-start d-inline-block"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button type="submit" className="send-message__btn">
                    Send Message
                  </Button>
                </motion.div>
              </form>
              <div className="dframer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.131562657938!2d3.3607423444150344!3d6.576353473668302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9271ea07192b%3A0xeb61868a07fcf71c!2sMaryland%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725413864426!5m2!1sen!2sng"
                  width="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  className="h-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
