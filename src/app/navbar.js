"use client";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userState} from "./atom/userlogin";
import {useEffect} from "react";
import {  onAuthStateChanged, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RxHamburgerMenu } from 'react-icons/rx'

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
                        className='w-16 max-[360px]:w-12 max-[310px]:w-10'
                    />
                    <p className="text-2xl max-[360px]:text-xl max-[310px]:text-[15px] font-serif">CoinBit</p>
                </div>
            </Link>
            <div className={`flex gap-10 max-[720px]:text-[13px] max-[600px]:hidden ${user && "text-[12px]"}`}>
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
                <div className="flex items-center gap-5 max-[310px]:gap-2">
                    <Link href="/signin"><p className="cursor-pointer  max-[720px]:text-[13px]">Login</p></Link>
                    <Link href="/signup"><button className="bg-blue-500 h-14  max-[720px]:h-10 px-5 max-[400px]:px-1 max-[400px]:h-8 max-[400px]:text-[12px]  rounded-lg text-lg  max-[720px]:text-[13px]">Get Started</button></Link>
                </div>  
            )}
            <RxHamburgerMenu className="text-2xl font-bold min-[600px]:hidden"/>
        </div>
     );
}
 
export default Navbar;