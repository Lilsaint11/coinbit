import Link from "next/link";

const Hero = () => {
    return ( 
        <div className="w-full flex justify-end mt-10">
            <div className="text-white w-1/2 mt-10 flex flex-col justify-center gap-5">
                <h1 className="text-5xl leading-tight font-semibold">Stay <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 ">ahead</span> of the financial curve with  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">CoinBit</span></h1>
                <p className="text-slate-400 max-w-[450px]">Unlock the power of digital assets and harness the potential of cryptocurrency investments with confidence on our secure and user-friendly platform!</p>
                <div className="flex gap-5">
                    <Link href="/signup"><button className="bg-blue-500 p-3 w-40 rounded-full">Get Started</button></Link>
                    <Link href="/about"><button className="bg-white text-black p-3 w-40 rounded-full">How it works</button></Link>
                </div>
                <div className="flex gap-10 mt-5">
                    <span>
                        <h2 className="text-4xl">$500k +</h2>
                        <p className="text-[13px] text-slate-400">in assets under management</p>
                    </span>
                    <span>
                        <h2 className="text-4xl">$30k +</h2>
                        <p className="text-[13px] text-slate-400">in monthly trading volume</p>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;