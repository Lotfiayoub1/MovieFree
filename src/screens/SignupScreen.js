import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input
          ref={passwordRef}
          type="password"
          name="Password"
          id="password"
          placeholder="Password"
        />
        <button onClick={SignIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Lotflix?</span>
          <span onClick={register} className="signupScreen_link">
            {" "}
            Sign up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
