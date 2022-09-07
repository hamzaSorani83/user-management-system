import React, { useState } from "react";
import { Signin, Signup } from "../";


const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  
  return (
    <div className="h-screen flex justify-center m-7 md:m-0" id="login-box">
      <div className="w-full lg:w-10/12 my-auto">
        <div className={["flex flex-wrap custom-shadow custom-card", isSignup ? "flex-row-reverse" : ''].join(' ')}>
          { isSignup ? <Signup setIsSignup={setIsSignup} /> : <Signin />}
          <div className="Card flex flex-col justify-center rounded-right myColor p-4">
            <h1 className="text-center text-4xl font-bold text-white">Hello Friends!</h1>
            <hr className="my-3 bg-gray-300 myHr" />
            <p className="text-center font-bold text-gray-200">Enter your personal details and start your journey with us!</p>
            <button className="py-2 self-center font-bold mt-12 myLinkBtn text-white capitalize" id="register-link" onClick={() => setIsSignup(!isSignup)}>
              { isSignup ? 'sign in' : 'sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
