import {React, useState} from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/styles.css";
import  GoogleIcon  from "../assets/Google.svg";
import Logo from "../assets/logo.png"
import Input from "../components/Input";
import {  Loader, MailIcon } from "lucide-react";
import { useAuthstore } from '../Stores/authstores';
import { toast , ToastContainer } from 'react-toastify';

function StudentLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { StudentLogin, isLoading, error } = useAuthstore();
    const notify = (message) => toast(message);
    const handleLogin = async (e) => {
        e.preventDefault();
        await StudentLogin(email, password);
    };
  return (
    <section className="bg-black min-h-screen min-w-auto flex  items-center ">
      <div className="md:w-screen min-h-screen w-0 hidden md:block text-white ">
        <div className=' font-bold relative top-20 left-20 flex flex-col'> 
          <h1 className='text-display font-bold'>Learn without limits</h1>
          <h2 className='text-small font-normal mb-5 w-1/2'>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</h2>
           <Link to="/"> <span className='bg-primary py-3 px-8 text-center rounded-full font-semibold text-white'>Explore</span></Link>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center md:w-2/5 w-screen h-screen bg-white">
        <div className="flex flex-col items-center justify-center  h-auto  rounded-2xl">
                <div className='Top-login px-2 md:w-96 w-auto text-center'>
                  <div className="mb-4 relative left-24 md:left-32 w-fit">
                    <img src={Logo} alt="logo " />
                  </div>
                <h2 className="md:text-h2 text-4xl text-center mb-4">Student Login</h2>
                <p className='md:text-lg text-lg mb-2'>Step towards Success</p>
                <div className='border border-black text-center py-2 w-full  md:text-h4 flex items-center rounded-md justify-center gap-2'>
                  <img src={GoogleIcon} alt="" />Google
                </div>
                <div className="divider text-center my-2">
                  OR
                </div>
                
                <div className='Form-login'>
                  <form onSubmit={handleLogin}>
                    <Input
                    type="email"
                    placeholder="abc@gmail.com"
                    icon={MailIcon}
                    label={"Email *"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                    type="password"
                    icon={MailIcon}
                    label={"Password *"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link to="/forgetpassword" ><p className='md:text-end text-start underline underline-offset-1  text-lg relative bottom-2 '>Forget Password?</p></Link>
                  
                    <motion.button
                        className='bg-primary text-center flex justify-center text-white w-full py-4 text-small rounded-md mt-10'
                        type='submit'
                        disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Login"}
                  </motion.button>
                  {error && <p className="text-red-500 text-center">{error}</p>}
                 <span className='Signup text-md'> Don't have an account? <Link to="/signup" className='underline font-bold underline-offset-1 text-primary'>Sign Up</Link></span>
                  </form>
                  <div className='relative md:right-28 md:bottom-40 mt-1 bottom-32  right-16'>
                  <input
                    className=' h-5'
                    type="checkbox"
                    id='remember'
                    />
                    <label htmlFor="remember" className='text-lg relative bottom-1'> Remember Me</label>
                  </div>

                  
                </div>
                </div>
        </div>
      </div>
      
    </section>
  )
}

export default StudentLogin