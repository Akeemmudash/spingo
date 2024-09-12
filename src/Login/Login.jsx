import { LoginBig } from "../../../assets";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <div className="login__logo">
            <img src={LoginBig} alt="Login Page" />
          </div>
          <div className="login_details">
            <h1>Sign Up</h1>
            <p>
              Already have an account? <span>Sign in</span>
            </p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email address" />
              <input type="password" placeholder="Password" />
            </form>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name=""
                id=""
                checked
                disabled
              />
              <p>
                I agree with <span>Privacy Policy</span> and{" "}
                <span>Terms of Use</span>{" "}
              </p>
            </div>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
