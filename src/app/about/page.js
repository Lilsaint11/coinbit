import Link from "next/link";
import Reviews from "../components/reviews";

const About = () => {
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 pt-28">
            <div className=" flex  justify-center gap-5">
                <div className="text-white w-1/2">
                <h3 className="text-4xl mb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 ">About Us</h3>
                <p className="text-[13px] mb-5 leading-loose">
                    Welcome to CoinBit, your one-stop platform for cryptocurrency investment. We are a team of experienced investors and analysts who are passionate about helping people invest in and profit from the crypto market.

                    We offer a variety of plans to help you get started in crypto investment,click <Link href="pricing"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 border-b-[1px]">here</span> </Link> to view our pricing plans.<br/>

                    We believe that cryptocurrency is a revolutionary technology with the potential to change the world. We also believe that investing in cryptocurrency can be a wise financial decision for those who are willing to do their research and understand the risks involved.<br/>

                    Our goal at CoinBit is to help you make successful crypto investments without prior knowledge of crypto, to avoid loosing your savings to the crypto market which can be quite volatile.
                </p>
                <h4 className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Our Mission</h4>

                <p  className="text-[13px] mb-5 leading-loose">Our mission is to connect people with the crypto market with or without prior knowledge of trading and the crypto market at large. We believe that crypto has the potential to change the world, and we want to help people make the most of this opportunity.</p>

             </div>
            <div className="">
                <img src="https://th.bing.com/th/id/R.4c594fa190c09477d8a68c7deaf25d70?rik=4WbpJGIycojC7w&pid=ImgRaw&r=0" alt="" />
            </div>
            </div>
            <div className="flex gap-5 text-white mx-5 mb-10">
                <div>
                    <h4 className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> Our Values </h4>
                    <ul style={{listStyleType:"circle"}} className="text-[13px] flex flex-col gap-1 mb-5"> 
                        <li>Integrity: We believe in being honest and transparent with our users.</li> 
                        <li>Security: Your funds are safe and secure with us as you will be getting 100% of your investment returns.</li> 
                        <li> Community: We believe that the crypto community is one of the most supportive and welcoming communities in the world.</li>
                    </ul>
                </div>
                <div className="w-[500px]">
                    <Link href="contact"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 border-b-[1px]">Contact Us</span> </Link>
                    <p className="text-[13px] mt-3 leading-loose"> If you have any questions, please don't hesitate to contact us. We would be happy to help you get started in crypto investment.
                    Thank you for visiting CoinBit!</p>
                </div>
            </div>
            <div>
            <div className=" flex flex-col justify-center items-center gap-5 mt-20 text-white">
                <h3 className="text-2xl">Our recent reviews</h3>
                <p className="text-center text-sm leading-loose text-slate-500 w-[800px] mb-5">Each review is especially valuable to us. After all, a long joint path has been done for this. Success consists of trust, willingness to develop and change.</p>
            </div>
                <Reviews />
            </div>
        </div>
     );
}
 
export default About;