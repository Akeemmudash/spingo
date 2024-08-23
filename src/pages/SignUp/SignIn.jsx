import React from "react";
import { SignModel } from "../SignUp";
import { ImageBig, WhiteLogo, } from "../../assets";


const SignIn = () => {
  return (
    <div>
      <SignModel
        WebDP={ WhiteLogo }
        WebImg={ ImageBig }
        Sign="Sign In"
        Account={
          <>
            Don't have an account yet? <span>Sign Up</span>
          </>
        }
        YourName="Your Username or email address"
        PassWord="Password"
        Tick="Remember me"
        ForgotPassword="Forgot Password?"
        Dbtn= "BigBtn"
        Text= "Sign In"
      />
    </div>
  );
};

export default SignIn;
