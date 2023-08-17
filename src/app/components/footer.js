import Link from 'next/link';
import { IoLogoWhatsapp} from 'react-icons/io';
import { AiOutlineCopyright,AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black text-white flex flex-col items-center pb-5">
            <div className="flex  justify-between  p-20  max-[720px]:p-10 max-[680px]:px-5  text-white text-sm w-full max-[610px]:flex-col w-full">
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
                <span className='flex  justify-between w-[500px] max-[850px]:w-[400px] max-[610px]:w-full'>
                <div>
                    <p className="text-lg w-48 leading-loose font-normal max-[450px]:text-[15px] max-[365px]:text-[11px] max-[365px]:w-28">123 Market St. #22B Charlottesville, California 44635</p>
                    <p className="text-[12px] mt-7 max-[450px]:mt-4">coinbit@gmail.com</p>
                </div>
                <div className="flex flex-col gap-5 text-[12px] max-[365px]:text-[11px]">
                    <Link href="/about"><p>About</p></Link>
                    <Link href="/contact"><p>Contact</p></Link>
                    <Link href="/pricing"><p>Pricing</p></Link>
                    <p className='cursor-pointer'>Pathners</p>
                </div>
                <div className="flex flex-col gap-5 text-[12px] max-[365px]:text-[11px]">
                    <p  className='flex gap-1 cursor-pointer'><AiFillFacebook className="text-lg text-blue-800"/>Facebook</p>
                    <p className='flex gap-1 cursor-pointer'><FaTelegram className="text-lg text-blue-800"/>Telegram</p>
                    <p className='flex gap-1 cursor-pointer'><IoLogoWhatsapp  className="text-lg text-green-800"/>Whatsapp</p>
                    <p className='flex gap-1 cursor-pointer'><AiFillInstagram className="text-lg text-red-600"/>Instagram</p>
                </div>
                </span>
            </div>
            <p className='flex items-center max-[450px]:text-[13px]'><AiOutlineCopyright /> 2022 coinbit. All rights reserved</p>
        </div>
       
     );
}
 
export default Footer;