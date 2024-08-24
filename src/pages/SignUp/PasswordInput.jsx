import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "100%" }}>
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        style={{ width: "100%", paddingRight: "40px" }}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "30%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
