import React, { useState } from "react";
import "./styles/styles.css";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { Edit2Icon, Loader } from "lucide-react";
import Otpinput from "../components/Otp-input";
import { useAuthstore } from "../Stores/authstores";

function Verification() {
    const {verfiy, isLoading, error} = useAuthstore();
    const handleverification = async (e) => {
        e.preventDefault();
        await verfiy();
    }
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
                  <h2 className="md:text-h2 text-4xl text-center mb-4">Verify OTP</h2>
                  <p className='md:text-lg text-lg mb-2'>Enter OTP send on Your Email</p>
                  <div className='border-2 border-black text-center py-2 w-full  md:text-h4 flex items-center rounded-full justify-center gap-2'>
                    abc@gmail.com <Link to="/teachersignup" ><Edit2Icon/></Link>
                  </div>
                  
                  <div className='Form-login my-10'>
                    <form onSubmit={handleverification}>
                    <Otpinput length={6} onOtpSubmit={(otp) => console.log(otp)} />

                    <motion.button
                        className='bg-primary text-center flex justify-center text-white w-full py-4 text-small rounded-md mt-10'
                        type='submit'
                        disabled={isLoading}
                  >
                    {isLoading ? <Loader /> : "Login"}
                  </motion.button>
                  </form>
                  </div>
                  </div>
          </div>
        </div>
        
      </section>

  )
}

export default Verification