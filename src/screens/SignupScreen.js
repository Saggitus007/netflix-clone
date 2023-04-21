import React, { useRef } from "react"; 
import { auth } from "../FirebaseConfig";
import "./SignupScreen.css";


function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUerWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.messsage);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
  };


  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"/>
        <input ref={passwordRef} placeholder="password" type="password"/>
        <button type="submit"onClick={signIn
        }>Sign In</button>

        <h2>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link"onClick={register
          }>Sign Up now.</span>
        </h2>
        </form>
    </div>
  )
}

export default SignupScreen
