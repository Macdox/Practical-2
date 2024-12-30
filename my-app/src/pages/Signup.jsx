import React, { useState } from "react";
import "./styles/styles.css";
import Input from "../components/Input";
import { CircleUser, Eye, EyeIcon, LockIcon, MailIcon } from "lucide-react";
function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section className="bg-Dark min-h-screen min-w-auto flex  items-center">
      <div className="md:w-3/5 min-h-screen w-0 img1 "></div>
      <div className="w-screen min-h-screen px-20 flex flex-col justify-center items-center">
      <h1 className="text-primary text-6xl font-bold mb-30">SPIRO</h1>
        <div className="w-auto h-auto px-5 rounded-2xl border-2 border-gray-700 bg-transparent">
            <h1 className="text-secondary text-[40px] font-semibold text-center pt-10 underline underline-offset-4">Signup</h1>
            <div>
                <form action="">
                    <Input
                        icon={MailIcon}
                        label="Email*"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                        icon={CircleUser}
                        label="Name*"
                        id="name"
                        type="name"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                />
                <Input
                        icon={CircleUser}
                        label="Last Name"
                        id="lastName"
                        type="name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                        icon={EyeIcon}
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                        icon={EyeIcon}
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        placeholder="confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </form>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Signup;
