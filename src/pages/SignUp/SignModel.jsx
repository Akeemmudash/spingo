import React from "react";
import { motion } from "framer-motion";
import ButtonUse from "./ButtonUse";
import PasswordToggle from "./PasswordInput";
import "./login.css";

const SignModel = ({
  WebDP,
  WebImg2,
  Sign,
  Account,
  YourName,
  UserName,
  EmailAddress,
  Tick,
  ForgotPassword,
  Dbtn,
  Text,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <motion.div
      className="signPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="smallScreen">
        <motion.div
          className="logo-container w-100 h-100 d-flex align-items-center"
          variants={imageVariants}
        >
          <img src={WebDP} alt="logo" className="Dlogo" />
          <img src={WebImg2} alt="SignModel Page" className="displayImage" />
        </motion.div>
        <motion.div className="details container" variants={cardVariants}>
          <div className="card">
            <div className="headings">
              <h1>{Sign}</h1>
              <p>{Account}</p>
            </div>
            <form>
              {YourName && <input type="text" placeholder={YourName} />}
              {UserName && <input type="text" placeholder={UserName} />}
              {EmailAddress && (
                <input type="email" placeholder={EmailAddress} />
              )}
              <PasswordToggle />
            </form>
            <div className="login__options">
              <div className="dtick">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                  id="terms"
                />
                <p>{Tick}</p>
              </div>
              <p>{ForgotPassword}</p>
            </div>
            <ButtonUse Dbtn={Dbtn} Text={Text} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignModel;
