import React from "react";
import "./login.css";
import { PasswordToggle, ButtonUse } from "../../Utils";

const SignModel = ({
  WebDP,
  WebImg,
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
  return (
    <div className="login">
        <div className="logo-container w-100 h-100 d-flex align-items-center">
          <img src={WebDP} alt="logo" className="Dlogo"/>
          <img src={WebImg} alt="SignModel Page" className="displayImage" />
        </div>
        <div className="details container">
          <div className="card">
          <div className="headings">
          <h1>{Sign}</h1>
          <p>{Account}</p>
          </div>
          <form>
            {YourName && <input type="text" placeholder={YourName} />}
            {UserName && <input type="text" placeholder={UserName} />}
            {EmailAddress && <input type="email" placeholder={EmailAddress} />}
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
        </div>
      </div>
  );
};

export default SignModel;
