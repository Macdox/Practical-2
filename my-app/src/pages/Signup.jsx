import React, { useState } from "react";
import "./styles/styles.css";
import Input from "../components/Input";
import { CircleUser, Eye, EyeClosedIcon, EyeIcon, LockIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
                await signup(email, password, name);
                navigate("/verify-email");
        } catch (error) {
                console.log(error);
        }
};

  return (
    <section className="bg-Dark min-h-screen min-w-auto flex  items-center">
      <div className="md:w-screen min-h-screen w-0 img1 "></div>
      <div className=" flex flex-col items-center justify-center md:w-2/5 w-screen h-screen md:m-0 my-10">
        <div className="flex flex-col items-center justify-center m-10 h-auto w-auto border-2  py-10 border-slate-600 rounded-2xl">
                <h1 className="text-4xl text-white font-bold">Sign Up</h1>
                <p className="text-white">Welcome to the community</p>
                <form onSubmit={handleSignUp} className="mx-5">
                        <Input
                                label={"First Name*"}
                                icon = {CircleUser}
                                type="text"
                                placeholder="First Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                                label={"Last name"}
                                icon = {CircleUser}
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                        />
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
                        <Input
                                label={"Confirm Password*"}
                                icon = {EyeClosedIcon}
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="submit" className="className='mt-5 w-full py-3 px-4 font-bold text-white border-2 border-white rounded-3xl hover:bg-white hover:text-black"> Send Otp</button>
                </form>
                <h3 className="text-white mt-5">Already Have Account? <Link to="/Login"><span className="underline font-bold ">Login</span></Link></h3>
        </div>
      </div>
      
    </section>
  );
}

export default Signup;
