"use client";
import { useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import {db} from "../firebase"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"

const SignUp = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:""
    });

    const {firstName,lastName,email, password,confirmPassword} = formData;

    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    async function onSubmit(e){
        e.preventDefault()
        //add user to database
        try {
            if(password === confirmPassword){
                const auth = getAuth();
                const userCredential =await createUserWithEmailAndPassword(auth,email,password,confirmPassword);
                updateProfile(auth.currentUser,{
                    displayName: firstName
                })
                const user = userCredential.user
                const formDataCopy = {...formData}
                formDataCopy.timestamp = serverTimestamp();
                await setDoc(doc(db,"users", user.uid),formDataCopy);
                Cookies.set("loggedin", true);
                router.push("/dashboard")
            }else{
                alert("password no mash")
            }
        } catch (error) {
          alert("something went wrong with the registration")
        }
    }

    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[750px]:px-16 max-[650px]:px-10 pt-20 flex items-center justify-center ">
            <div className="bg-blue-950 w-[800px] h-[500px] rounded-xl mt-10  shadow shadow-slate-800 flex overflow-hidden">
                <div  className="w-1/2 max-[530px]:w-full flex flex-col justify-between items-center text-white py-5">
                    <h2 className="text-2xl font-semibold">Sign Up</h2>
                    <p className="text-[13px] mt-3">Already have an account? <Link href="/signin"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer ">Signin</span></Link></p>
                    <form action="" className=" w-full px-5 flex flex-col gap-5 justify-center" onSubmit={onSubmit}>
                        <input type="text" placeholder="First Name" value={firstName}  onChange={onChange} id="firstName" className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={onChange} id="lastName" className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <input type="email" placeholder="Email" value={email} onChange={onChange} id="email"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <input type="password" placeholder="Password" value={password} id="password" onChange={onChange} className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} id="confirmPassword" onChange={onChange} className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <button className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800">Sign Up</button>
                    </form>
                </div>
                <div className="w-1/2 relative max-[530px]:hidden">
                    <img src="https://images.unsplash.com/photo-1627978341448-59b3eeebc024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" className="h-full w-full rounded-tr-xl rounded-br-xl"/>
                    <span className="flex absolute top-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></span>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;