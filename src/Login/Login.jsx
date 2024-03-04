import React, { useEffect, useState } from 'react'
import loginImage from "../assets/loginImage.jpg"
import { Link ,useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import axios from "axios";
const Login = () => {

  const navigateTo = useNavigate();
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PASSWORD_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [email, setEmail] = useState("");
  const [emailIsFocus, setEmailIsFocus] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsFocus, setPasswordIsFocus] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  useEffect(()=>{
    if(window.localStorage.getItem("token")){
      navigateTo("/",{replace:"true"});
    }
  },[])
  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
    setEmailIsValid(res);
  }, [email]);
  useEffect(() => {
    const res = PASSWORD_REGEX.test(password);
    setPasswordIsValid(res);
  }, [password]);

  const BASE_URL = import.meta.env.VITE_REACT_API_URL;
  const handleSubmit = async(e)=>{
      e.preventDefault();
      if(emailIsValid && passwordIsValid){
         const response = await axios.post(`${BASE_URL}User/Login`,{userEmail:email,userPassword:password});
         const {data} = response;
         console.log(data);
         localStorage.setItem("token",data.token);
         localStorage.setItem("user",JSON.stringify({id:data?.userID , role:data?.userStatus}));
         navigateTo("/",{replace:true});
         window.location.reload();
      }else{
        alert("invalid data");
      }
  }


  return (
    <div className='login-container h-screen flex justify-center bg-primary items-center'>
      <div className="flex w-[1200px] mx-auto h-[600px] bg-white">
       <div className="flex-1 bg-blue-500 h-full">
        <img src={loginImage} alt="#" className='w-full h-full object-cover'/>
       </div>
       <div className="h-full flex-1 flex items-center justify-center">
        <form className='w-3/4 px-3 py-5 m-auto' onSubmit={handleSubmit}>
          <h1 className='text-[40px] text-center font-[600] text-third'>Welcome to mmc</h1>
          <p className='text-slate-700 text-center mb-5'>Please enter your confidentials</p>
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
          <p className='mb-5'>don't have account ? <Link to="/Register" className='font-bold text-third hover:border-b-2 hover:border-third'>Register</Link></p>
          <button type='submit' className='bg-primary inline-block p-3 text-center w-full text-white font-semibold tracking-wider mb-3'>Sign In</button>
          <Link to="/" className='border-[1px] bg-third text-center border-primary inline-block p-3 w-full text-white font-semibold tracking-wider'>Back</Link>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Login