import Link from "next/link";
import {BiMailSend } from 'react-icons/bi';
import { IoLogoWhatsapp} from 'react-icons/io';


const Contact = () => {
    return ( 
        <div  className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 pt-28 flex items-center justify-center text-white h-screen">{/*pl-72 h-screen*/ }
            <div className="w-1/2">
                <h3 className="text-4xl mb-2">Contact Us</h3>
                <p className="text-slate-300 text-[13px] text-left mb-5">Let's connect.We are here to help, and we'd love to hear from you! Whether you have a question, a comment,or inquiry about the platform, you can reach out to us through the contact form on this page or by email or social media.</p>
                <div className="flex gap-5 text-[13px] mb-7">
                <Link href="/signup"><button className="bg-white text-black p-2 w-40 rounded-2xl flex items-center gap-1"><IoLogoWhatsapp className="text-lg text-green-800"/>Via WhatsApp</button></Link>
                <Link href="/signup"><button className="bg-white text-black p-2 w-40 rounded-2xl  flex items-center gap-1"><BiMailSend className="text-lg text-black"/>Via Email</button></Link>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <input type="text" placeholder="Full Name"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <input type="email" placeholder="Email"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <textarea placeholder="Text"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <button className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800">Sumbit Form</button>
                </form>
            </div>
            <div className="w-1/2">
                <img src="/man-giving-introduction.png" alt="" className="w-96"/>
            </div>
        </div>
     );
}
 
export default Contact;