import Link from 'next/link';
import { BsCheck2All } from 'react-icons/bs';

const Pricing = () => {
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 pt-20">{/*pl-64*/ }
            <div className="flex flex-col items-center gap-5 justify-center pt-10">{/*pt-10 */ }
                <h3 className=" text-white text-6xl font-semibold">Pricing plans</h3>
                <p className="text-center text-[14px] text-slate-400">Our pricing plans are designed to be affordable,flexible and tailored to fit into the pockets of people</p>
            </div>
            <div className='flex justify-center items-center mt-20 gap-5'>
                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                    <div className=''>
                        <h3 className='text-2xl font-semibold mb-1'>Basic</h3>
                        <p className='text-[13px]'>Low budget investment</p>
                        <h3 className='text-5xl p-3 shadow-sm shadow-slate-400 my-3 w-72 rounded-lg'>$200</h3>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>100% Returns</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>7 days duration</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>Affordable pocket size</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>No investment bonus</p></span>
                    </div>
                    <Link href="/paymentDetails/250"><button className="bg-blue-900 p-3 w-full rounded-lg text-white mt-5 font-semibold text-[13px]">Invest Plan</button></Link>
                </div>
                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg shadow-md shadow-slate-500'>
                    <div className=''>
                        <h3 className='text-2xl font-semibold mb-1'>Standard</h3>
                        <p className='text-[13px] '>Most popular investment</p>
                        <h3 className='text-5xl p-3 shadow-sm shadow-slate-400 my-3 w-72 rounded-lg'>$1200</h3>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='flex items-center gap-2 '><BsCheck2All /><p>200% Returns</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>14 days duration</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>Most popular investment</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>$20 investment bonus</p></span>
                    </div>
                    <Link href="/paymentDetails/1200"><button className="bg-blue-900 p-3 w-full rounded-lg text-white mt-12 font-semibold text-[13px]">Invest Plan</button></Link>
                </div>
                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                    <div className=''>
                        <h3 className='text-2xl font-semibold mb-1'>Premium</h3>
                        <p className='text-[13px] '>Big investors investment</p>
                        <h3 className='text-5xl p-3 shadow-sm shadow-slate-400 my-3 w-72 rounded-lg'>$2500</h3>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>300% Returns</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>30 days duration</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>Big investors size</p></span>
                        <span className='flex items-center gap-2'><BsCheck2All /><p>$50 investment bonus</p></span>
                    </div>
                    <Link href="/paymentDetails/2500"> <button className="bg-blue-900 p-3 w-full rounded-lg text-white mt-5 font-semibold text-[13px]">Invest Plan</button></Link>
                </div>
            </div>
            <div className='text-white mt-20 flex gap-40 items-center'>
                <div>
                    <h3 className='text-4xl mb-5 font-serif'>Invest with CoinBit today!!!</h3>
                    <p className='w-[500px] leading-loose text-sm text-slate-300'>Are you looking for a way to invest in the future of finance? If so, then Join us at CoinBit. We offer a wide variety of plans to choose from, as well as high returns and a user-friendly interface.

                    With our platform, you can easily invest in cryptocurrencies with no prior idea on trading crypto. You can also track your investments and withdrawal is fast and secure.

                    We believe that cryptocurrencies are the future of finance, and we want to help you get involved. That's why we offer a variety of plans to help you with r withut knowledge n cryptocurrencies to invest in them.

                    So what are you waiting for? Join CoinBit today and start investing in the future!</p>
                    <Link href="/signup"><button className="bg-blue-500 p-3 w-64 rounded-full mt-10">Get Started</button></Link>
                </div>
                <img src="/businessman.png" alt="" className='w-36'/>
            </div>
        </div>
     );
}
 
export default Pricing;