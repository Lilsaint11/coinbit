"use client";
import Link from "next/link";
import {BiMailSend } from 'react-icons/bi';
import { IoLogoWhatsapp} from 'react-icons/io';


const Contact = () => {
    function text(){
        alert("Thanks for reaching out, would get back ASAP")
    }
    return ( 
        <div  className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[875px]:px-20 max-[700px]:px-10  max-[420px]:px-5 max-[800px]:pt-32 max-[770px]:pt-28 pt-28 flex max-[770px]:flex-col min-[770px]:items-center min-[770px]:justify-center text-white min-[770x]:h-screen">{/*pl-72 h-screen*/ }
            <div className="w-1/2 max-[770px]:w-full">
                <h3 className="text-4xl mb-2  max-[500px]:text-3xl">Contact Us</h3>
                <p className="text-slate-300 text-[13px] text-left mb-5">Let's connect.We are here to help, and we'd love to hear from you! Whether you have a question, a comment,or inquiry about the platform, you can reach out to us through the contact form on this page or by email or social media.</p>
                <div className="flex gap-5 text-[13px] mb-7">
                <Link href="https://wa.me/2349011187686"><button className="bg-white text-black p-2 w-40 max-[400px]:w-28  max-[400px]:text-[10px] rounded-2xl flex items-center gap-1"><IoLogoWhatsapp className="text-lg text-green-800"/>Via WhatsApp</button></Link>
                <button className="bg-white text-black p-2 w-40  max-[400px]:w-28  max-[400px]:text-[13px] rounded-2xl  flex items-center gap-1"><BiMailSend className="text-lg text-black"/>Via Email</button>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <input type="text" placeholder="Full Name"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <input type="email" placeholder="Email"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <textarea placeholder="Text"  className="bg-transparent border-b-[1px] w-full text-[13px] focus:outline-none py-3"/>
                    <button className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800" onClick={text}>Sumbit Form</button>
                </form>
            </div>
          
            <div className="w-1/2 max-[770px]:hidden">
                <img src="/man-giving-introduction.png" alt="" className="w-96 max-[770px]:hidden"/>
            </div>
        </div>
     );
}
 
export default Contact;