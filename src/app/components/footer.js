import Link from 'next/link';
import { IoLogoWhatsapp} from 'react-icons/io';
import { AiOutlineCopyright,AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black text-white flex flex-col items-center pb-5">
            <div className="flex  justify-between  p-20  text-white text-sm w-full">
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
                <div>
                    <p className="text-lg w-48 leading-loose font-normal">123 Market St. #22B Charlottesville, California 44635</p>
                    <p className="text-[12px] mt-7">coinbit@gmail.com</p>
                </div>
                <div className="flex flex-col gap-5 text-[12px]">
                    <Link href="/about"><p>About</p></Link>
                    <Link href="/contact"><p>Contact</p></Link>
                    <Link href="/pricing"><p>Pricing</p></Link>
                    <p>Pathners</p>
                </div>
                <div className="flex flex-col gap-5 text-[12px]">
                    <p  className='flex gap-1'><AiFillFacebook className="text-lg text-blue-800"/>Facebook</p>
                    <p className='flex gap-1'><FaTelegram className="text-lg text-blue-800"/>Telegram</p>
                    <p className='flex gap-1'><IoLogoWhatsapp  className="text-lg text-green-800"/>Whatsapp</p>
                    <p className='flex gap-1'><AiFillInstagram className="text-lg text-red-600"/>Instagram</p>
                </div>
            </div>
            <p className='flex items-center'><AiOutlineCopyright /> 2022 coinbit. All rights reserved</p>
        </div>
       
     );
}
 
export default Footer;