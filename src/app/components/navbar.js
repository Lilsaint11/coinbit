import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="text-white flex justify-between items-center z-50 ">
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
            <div className="flex gap-10">
            <Link href="/about"><p className="cursor-pointer">About us</p></Link>
                <Link href="/pricing"><p className="cursor-pointer">Pricing</p></Link>
                <Link href="/contact"><p className="cursor-pointer">Contact</p></Link>
            </div>
            <div className="flex items-center gap-5">
            <Link href="/signin"><p className="cursor-pointer">Login</p></Link>
                <Link href="/signup"><button className="bg-blue-500 h-14 px-5 rounded-lg text-lg">Get Started</button></Link>
            </div>
        </div>
     );
}
 
export default Navbar;