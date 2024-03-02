import React, { useEffect, useRef, useState } from "react";
import loginImage from "../assets/loginImage.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const userNameRef = useRef();
  const [userName, setUserName] = useState("");
  const [userNameIsFocus, setUserNameIsFocus] = useState(false);
  const [userNameIsValid, setUserNameIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsFocus, setEmailIsFocus] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsFocus, setPasswordIsFocus] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  useEffect(()=>{
    if(window.localStorage.getItem("token")){
      navigateTo("/",{replace:"true"});
    }
  },[])
  useEffect(() => {
    const res = USERNAME_REGEX.test(userName);
    setUserNameIsValid(res);
  }, [userName]);
  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
    setEmailIsValid(res);
  }, [email]);
  useEffect(() => {
    const res = PASSWORD_REGEX.test(password);
    setPasswordIsValid(res);
  }, [password]);
  useEffect(() => {
    setErrMsg("");
  }, [userName, email, password]);
  return (
    <div className="register-container min-h-screen flex justify-center bg-primary items-center">
      <div className="flex w-[1200px] mx-auto bg-white h-[700px]">
        <div className="flex-1 bg-blue-500 h-full w-full">
          <img
            src={loginImage}
            alt="#"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full flex-1 flex items-center justify-center">
          <form className="w-3/4 px-3 py-5 m-auto">
            <h1 className="text-[40px] text-center font-[600] text-third">
              Welcome to mmc
            </h1>
            <p className="text-slate-700 text-center mb-5">
              Please create your account
            </p>
            <div className="mb-5 flex flex-col gap-2 items-start">
              <label
                className={`font-semibold text-third capitalize ${
                  !userNameIsValid && userName && "text-red-500"
                }`}
                htmlFor="userName"
              >
                user name
              </label>
              <div className="box w-full h-full relative">
                <input
                  type="text"
                  ref={userNameRef}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="enter your userName"
                  name="userName"
                  className={`border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third ${
                    userNameIsFocus && userName && userNameIsValid
                      ? "focus:border-green-500"
                      : "focus:border-red-500"
                  }`}
                  onFocus={() => setUserNameIsFocus(true)}
                  onBlur={() => setUserNameIsFocus(false)}
                />
                <div className="status-icon absolute top-[15px] transform right-[10px]">
                  {userName && (
                    <>
                      {!userNameIsValid ? (
                        <div className="failed-icon text-[18px] text-red-500">
                          <FaTimesCircle />
                        </div>
                      ) : (
                        <div className="success-icon text-[18px] text-green-500">
                          <FaCheckCircle />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              {userNameIsFocus && userName && !userNameIsValid && (
                <p className="text-red-500 font-[400]">
                  user name must be between 3 and 24 caracter without special
                  caracters
                </p>
              )}
            </div>
            <div className="mb-5 flex flex-col gap-2 items-start">
              <label
                className={`font-semibold text-third capitalize ${
                  !emailIsValid && email && "text-red-500"
                }`}
                htmlFor="email"
              >
                email
              </label>
              <div className="box w-full h-full relative">
                <input
                  type="text"
                  placeholder="enter your email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third ${
                    emailIsFocus && email && emailIsValid
                      ? "focus:border-green-500"
                      : "focus:border-red-500"
                  }`}
                  onFocus={() => setEmailIsFocus(true)}
                  onBlur={() => setEmailIsFocus(false)}
                />
                <div className="status-icon absolute top-[15px] transform right-[10px]">
                  {email && (
                    <>
                      {!emailIsValid ? (
                        <div className="failed-icon text-[18px] text-red-500">
                          <FaTimesCircle />
                        </div>
                      ) : (
                        <div className="success-icon text-[18px] text-green-500">
                          <FaCheckCircle />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              {emailIsFocus && email && !emailIsValid && (
                <p className="text-red-500 font-[400]">email invalid</p>
              )}
            </div>
            <div className="mb-2 flex flex-col gap-2 items-start">
              <label
                className={`font-semibold text-third capitalize ${
                  !passwordIsValid && password && "text-red-500"
                }`}
                htmlFor="password"
              >
                password
              </label>
              <div className="box w-full h-full relative">
                <input
                  type="password"
                  placeholder="enter your password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className={`border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third ${
                    passwordIsFocus && password && passwordIsValid
                      ? "focus:border-green-500"
                      : "focus:border-red-500"
                  }`}
                  onFocus={() => setPasswordIsFocus(true)}
                  onBlur={() => setPasswordIsFocus(false)}
                />
                <div className="status-icon absolute top-[15px] transform right-[10px]">
                  {password && (
                    <>
                      {!passwordIsValid ? (
                        <div className="failed-icon text-[18px] text-red-500">
                          <FaTimesCircle />
                        </div>
                      ) : (
                        <div className="success-icon text-[18px] text-green-500">
                          <FaCheckCircle />
                        </div>
                      )}
                    </>
                  )}
                </div>
                {passwordIsFocus && password && !passwordIsValid && (
                  <p className="text-red-500 font-[400]">
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span>!</span>{" "}
                    <span>@</span>{" "}
                    <span>#</span>{" "}
                    <span>$</span>{" "}
                    <span>%</span>
                  </p>
                )}
              </div>
            </div>
            <p className="mb-5">
              already have account ?{" "}
              <Link
                to="/Login"
                className="font-bold text-third hover:border-b-2 hover:border-third"
              >
                Login
              </Link>
            </p>
            <button className="bg-primary inline-block p-3 text-center w-full text-white font-semibold tracking-wider mb-3">
              Sign up
            </button>
            <Link
              to="/"
              className="border-[1px] bg-third text-center border-primary inline-block p-3 w-full text-white font-semibold tracking-wider"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
