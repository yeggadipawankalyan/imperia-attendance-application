import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import "./Login.css"; // Assuming you have a CSS file for styling

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container text-center mt-5">
      <img src={Logo} alt="Logo" className="w-25" />
      <h5>Welcome back!</h5>
      <h2>Login to your account</h2>
      <h3>Sunrise Hyderabad School</h3>

      <form className="w-25 mx-auto mt-4">
        {/* Username Input */}
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="username-addon">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="username-addon"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password Input with Eye Icon Inside */}
        <div className="input-group flex-nowrap mb-3 position-relative">
          <span className="input-group-text" id="password-addon">@</span>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control pe-5"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="password-addon"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="position-absolute top-50 translate-middle-y"
            style={{
              right: "15px",
              cursor: "pointer",
              color: "#50555a",
              zIndex: 10,
            }}
            onMouseDown={(e) => e.preventDefault()} // Prevent blur
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash /> }
          </span>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
