import { useState } from "react";
import "./Login.css"; // ✅ import CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Please fill all fields");
      return;
    }

    if (email === "admin@gmail.com" && password === "1234") {
      setMessage("✅ Login Successful");
    } else {
      setMessage("❌ Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button">Login</button>
        </form>

        <p className="login-message">{message}</p>
      </div>
    </div>
  );
}

export default Login;
