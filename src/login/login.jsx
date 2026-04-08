
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
 
  const navigate=useNavigate();
  function iamtryingtologin() {
    if(username === "prashwitha" && password === "123") {
      navigate("/home");
    } else {
      navigate("/");
    }
  }



  


  return (

    <div>
      <h1>Login <span className="span"> To </span>Page</h1>


      <input type="text" value={username} onChange={(e) => setusername(e.target.value)}/>
      <br />
      <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
      <br />
      <button onClick={iamtryingtologin} className="bg_color"> Login</button>
    </div>

  );
}
export default Login;