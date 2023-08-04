import Link from "next/link";

const SignIn = () => {
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 pt-20 flex items-center justify-center ">
            <div className="bg-blue-950 w-[800px] h-[450px] rounded-xl mt-10  shadow shadow-slate-800 flex overflow-hidden">
                <div  className="w-1/2 flex flex-col justify-center items-center text-white py-5">
                    <h2 className="text-2xl font-semibold">Sign In</h2>
                    <p className="text-[13px] mt-3">Dont have an account? <Link href="/signup"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer ">Signup</span></Link></p>
                    <form action="" className=" w-full px-5 flex flex-col gap-5 justify-center mt-5">
                        <input type="email" placeholder="Email"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <input type="password" placeholder="Password"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                        <div className="flex justify-between text-[12px]">
                            <span className=" flex items-center">
                                <input type="checkbox" name="" id="" className="cursor-pointer"/>
                                <p> Remember me </p>
                            </span>
                            <p className="cursor-pointer">Forgot password?</p>
                         </div>
                        <button className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800 mt-5">Sign In</button>
                    </form>
                </div>
                <div className="w-1/2 relative">
                    <img src="https://images.unsplash.com/photo-1627978341448-59b3eeebc024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" className=" w-full rounded-tr-xl rounded-br-xl"/>
                    <span className="flex absolute top-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></span>
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;