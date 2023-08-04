import {GiMoneyStack,GiPriceTag} from "react-icons/gi";
import {BiSolidDashboard} from "react-icons/bi";
import {CgProfile,CgLogOut} from "react-icons/cg";
import {HiOutlineInformationCircle} from "react-icons/hi";
import { IoLogoWhatsapp} from 'react-icons/io';
import { AiOutlineCopyright,AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import Link from "next/link";

const Sidebar = () => {
    return ( 
        <div className="bg-black text-white h-screen justify-between fixed left-0 w-56 flex flex-col py-5">
            <div className="flex flex-col gap-5">
                <div className="flex items-center h-10">
                    <img
                        src="/cblogo.png"
                        alt="logo"
                        className='w-12'
                    />
                    <p className="text-2xl font-serif">CoinBit</p>
                </div>
                <div className="px-5 flex flex-col gap-10">
                    <div className="flex items-center gap-2">
                        <BiSolidDashboard className="text-2xl"/>
                        <Link href="/dashboard"><p className="font-bold cursor-pointer">Dashboard</p></Link>
                    </div>
                    <Link href="/profile">
                        <div className="flex items-center gap-2">
                            <CgProfile className="text-2xl"/>
                            <p className="cursor-pointer">Profile</p>
                        </div>
                    </Link>
                    <Link href="/investment-record">
                    <div className="flex items-center gap-2">
                        <GiMoneyStack className="text-2xl"/>
                        <p className="cursor-pointer">Investments</p>
                    </div>
                    </Link>
                    <div className="flex items-center gap-2">
                        <GiPriceTag className="text-2xl"/>
                        <Link href="/pricing"><p className="cursor-pointer">Pricing</p></Link>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <CgLogOut className="text-2xl"/>
                        <p className="cursor-pointer">Logout</p>
                    </div>
                </div>
                <span className="flex w-full px-5 bg-slate-500 h-[1px]"></span>
            </div>
            <div className="flex flex-col gap-3 px-5">
                <p className="text-[10px] text-slate-500">HELP AND SUPPORT</p>
                <p className="text-[13px]">Need help? <Link href="/contact "><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 underline decoration-blue-500 cursor-pointer">Contact us</span></Link> </p>
                <div className="flex gap-5">
                    <AiFillFacebook className="text-lg text-blue-800 cursor-pointer"/>
                    <FaTelegram className="text-lg text-blue-800 cursor-pointer"/>
                    <IoLogoWhatsapp  className="text-lg text-green-800 cursor-pointer"/>
                    <AiFillInstagram className="text-lg text-red-700 cursor-pointer"/>
                </div>
                <p className="text-[12px] flex items-center gap-1 mt-5">< AiOutlineCopyright />copyright coinbit@2023</p>
            </div>
        </div>
     );
}
 
export default Sidebar;