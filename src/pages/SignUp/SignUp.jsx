import React from "react";
import SignModel from "../SignUp/SignModel"; // Ensure this is the correct path
import { ImageBig, WhiteLogo } from "../../assets"; // Ensure these imports are correct

const SignUp = () => {
  return (
    <div>
      <SignModel
        WebDP={WhiteLogo}
        WebImg={ImageBig}
        Sign="Sign Up"
        Account={
          <>
            Already have an account? <span>Sign In</span>
          </>
        }
        YourName="Your name"
        UserName="Username"
        EmailAddress="Email address"
        Tick={
          <>
            I agree with <span>Privacy Policy</span> and <span>Terms of use</span>
          </>
        }
        Dbtn="BigBtn"
        Text="Sign Up"
      />
    </div>
  );
};

export default SignUp;
