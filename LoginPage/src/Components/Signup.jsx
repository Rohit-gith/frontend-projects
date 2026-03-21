import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup Successful");
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />

        <button>Signup</button>
      </form>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
// const handleSignup = (e) => {
//   e.preventDefault();

//   const user = {
//     email,
//     password,
//   };

//   // Save in localStorage
//   localStorage.setItem("user", JSON.stringify(user));

//   alert("Signup Successful");
// };