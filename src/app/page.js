"use client"
import Body from './components/body'
import Hero from './components/hero'
import Dashboard from './dashboard/page';
import { useRecoilState } from "recoil";
import {useEffect} from "react";
import { userState} from "./atom/userlogin";
import {  onAuthStateChanged, getAuth } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(true)
        }
    })
  },[auth])
  return (
    <>
      <main className='relative bg-[url("/mainbg.png")] max-[610px]:bg-[url("/smallbg.png")] max-[610px]:bg-bottom bg-contain'>
      <img
        src="/mainbg.png"
        alt="main bg"
        className="w-screen bg-contain absolute top-0 -z-10 "
        priority
      />
      <div className='z-10 pt-5'>
        <div className={`px-28 max-[720px]:px-10 max-[660px]:px-5 ${user && "px-24"}`}>
          <Hero />
        </div>
       <Body />
      </div>
    </main>
    )
    </>
  )
}
