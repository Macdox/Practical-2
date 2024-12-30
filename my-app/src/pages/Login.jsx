import {React, useState} from 'react'
import { Link } from "react-router-dom";
import "./styles/styles.css";
import Input from "../components/Input";
import { CircleUser, EyeClosedIcon, MailIcon } from "lucide-react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="bg-Dark min-h-screen min-w-auto flex  items-center">
      <div className="md:w-screen min-h-screen w-0 hidden md:block img1 ">
        <div className=' text-white font-bold relative top-20 left-20 flex flex-col'> 
          <h1 className='text-display font-bold'>Learn without limits</h1>
          <h2 className='text-small font-normal w-1/2'>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</h2>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center md:w-2/5 w-screen h-screen md:m-0 my-10">
        <div className="flex flex-col items-center justify-center m-10 h-auto w-auto border-2  py-10 border-slate-600 rounded-2xl">
                <h1 className="text-4xl text-white font-bold">Login</h1>
                <p className="text-white">Welcome to the community</p>
                <form action='' className="mx-5">
                        <Input
                                label={"Email*"}
                                icon = {MailIcon}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                                label={"Password*"}
                                icon = {EyeClosedIcon}
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                        />
                        <h3 className="text-white relative bottom-5 flex left-6 justify-start text-center"><Link to="/forgetpassword"><span className="underline font-bold ">Forget password?</span></Link></h3>
                        <div className='flex justify-center'>
                        <button type="submit" className="className='mt-5 w-2/4 py-3 px-4 font-bold text-white border-2 border-white rounded-3xl hover:bg-white hover:text-black">Login</button>
                        </div>
                        <h3 className="text-white mt-5 text-center">Don't Have Account? <Link to="/Signup"><span className="underline font-bold ">Signup</span></Link></h3>
                        
                </form>
        </div>
      </div>
      
    </section>
  )
}

export default Login