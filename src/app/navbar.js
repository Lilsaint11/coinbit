"use client";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userState} from "./atom/userlogin";
import {useEffect} from "react";
import {  onAuthStateChanged, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
    const [user, setUser] = useRecoilState(userState);
    const auth = getAuth()
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(true)
            }
        })
      },[auth])

      function onLogOut(){
        auth.signOut(),
        setUser(false)
        Cookies.remove("loggedin");
        router.push("/");
    }
    return ( 
        <div className="text-white flex justify-between items-center z-50 ">
            <Link href="/">
                <div className="flex items-center">
                    <img
                        src="/cblogo.png"
                        alt="logo"
                        className='w-16'
                    />
                    <p className="text-2xl font-serif">CoinBit</p>
                </div>
            </Link>
            <div className={`flex gap-10 ${user && "text-[12px]"}`}>
               {user && (
                <>
                <Link href="/dashboard"><p className={` cursor-pointer`}>Dashboard</p></Link>
                <Link href="/profile"><p className={` cursor-pointer `}>Profile</p></Link>
                <Link href="/investment-record"><p className={` cursor-pointer`}>Investments</p></Link>
                </>
                )}
                <Link href="/about"><p className="cursor-pointer">About us</p></Link>
                <Link href="/pricing"><p className="cursor-pointer">Pricing</p></Link>
                <Link href="/contact"><p className="cursor-pointer">Contact</p></Link>
            </div>
            {user ? (
                <p onClick={onLogOut} className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer">Logout</p>
            ): (
                <div className="flex items-center gap-5">
                    <Link href="/signin"><p className="cursor-pointer">Login</p></Link>
                    <Link href="/signup"><button className="bg-blue-500 h-14 px-5 rounded-lg text-lg">Get Started</button></Link>
                </div>  
            )}
        </div>
     );
}
 
export default Navbar;