"use client"
import Link from "next/link";
import Reviews from "./reviews";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const Body = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    
    return ( 
        <div className="bg-white text-black mt-24 flex flex-col items-center justify-center px-28 gap-5 pt-20">
            <h3 className="text-2xl" data-aos="fade-zoom-in">What is CoinBit?</h3>
            <p className="text-center text-sm leading-loose text-slate-500" data-aos="fade-zoom-in">
                CoinBit is a team of wholesale investors, analysts and programmers. We have been working on cryptocurrency platforms (and not only) for more than 4 years and have a competitive portfolio. All meetings, communications and agreements with our partners (clients) are held in a transparent manner.
            </p>
            
            <div className="flex gap-20" data-aos="fade-zoom-in">
                <img src="/crypto1.svg" alt="img" className="w-20"/>
                <img src="/crypto2.png" alt="img"className="w-20" />
                <img src="/crypto3.png" alt="img" className="w-20"/>
            </div>

            <div className="flex justify-between gap-20 mt-20">
                <div className="w-1/2 flex flex-col gap-5" data-aos="slide-right">
                    <h3 className="text-4xl font-serif">Here at CoinBit,<br/> We are all about security!</h3>
                    <p className="text-sm text-left text-slate-500 leading-loose">And how is security expressed? The smaller the investment in the investment, the greater the risk of failure. The more investments, the less risk.
                    Investment security means that your investment ($10 or $100) is not separately invested. Our experienced investors place bets from a common account, where there is always more than $100,000 on the balance.

                    Click on the button below and find out everything personally from our managers.
                    </p>
                    <Link href="/about"><button className="bg-blue-500 p-3 w-40 rounded-full text-white text-sm">Learn More</button></Link>
                </div>
                <div className="w-1/2 relative" data-aos="slide-left">
                 <img src="/Macbook Pro Tilted Screen Mockup 1.png" alt="" className="w-96"/>   
                </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center gap-5 mt-10">
                <p className="text-xl">Our crypto investment Pathners</p>
                <div className="flex justify-between w-full">
                    <img src="/btc.png" alt="btc" className="w-28 h-10"/>
                    <img src="eth.png" alt="eth" className="w-28 h-10"/>
                    <img src="lite.png" alt="lite" className="w-28 h-10"/>
                    <img src="ton.png" alt="ton" className="w-28 h-10"/>
                    <img src="tezos.png" alt="tezos" className="w-28 h-10"/>
                    <img src="chainlink.png" alt="chainlink" className="w-28 h-10"/>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-5 mt-20">
                <h3 className="text-2xl">Our recent reviews</h3>
                <p className="text-center text-sm leading-loose text-slate-500 w-[500px]">Each review is especially valuable to us. After all, a long joint path has been done for this. Success consists of trust, willingness to develop and change.</p>
            </div>
            <Reviews />
            <div className="flex mb-20"></div>
        </div>
     );
}
 
export default Body;