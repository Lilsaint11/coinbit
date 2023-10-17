"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const VerifyPayment = () => {
    const params = useParams()
    const router = useRouter()
    function copy(val){
        navigator.clipboard.writeText(val);
        alert("copied")
    }
    function verify(){
        alert("Wait while we confirm your transaction...")
        router.push("/dashboard")
    }
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5 pt-20 flex items-center justify-center text-black">
            <div className="bg-white rounded-xl p-5 w-[500px] ">
            <div className="flex flex-col gap-5">
                <h3 className="font-bold text-xl">Transaction Verification</h3>
                <div>
                    <h4 className="font-semibold text-sm">one time secure BTC Address(TRC20)</h4>
                    <div className="flex gap-3 items-center">
                        <input type="text" value="TAR6PjVthQGP3sbfg5wzXtXigwFdCY6ga9" className="border border-slate-500 p-2 rounded-md w-full"/>
                        <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 h-10 rounded-md text-sm" onClick={()=>copy("TAR6PjVthQGP3sbfg5wzXtXigwFdCY6ga9")}>Copy</button>
                    </div>
                    <h4 className="font-semibold text-[10px] text-red-500">please ensure you send to <span className='font-bold'>TRC20</span>  blckchain to prevent loss of funds</h4>
                </div>
                <div  className="">
                    <h4  className="font-semibold text-sm">BTC Amount</h4>
                    <div className="flex gap-3 items-center">
                    <input type="text" value={params.btcPrice} className="border border-slate-500 p-2 rounded-md w-full"/>
                    <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 h-10 rounded-md text-sm"  onClick={()=>copy(params.btcPrice)}>Copy</button>
                    </div>
                </div>
                <div>
                    <div   className="w-full">
                        <h4  className="font-semibold text-sm">Your Bitcoin Wallet Address</h4>
                        <input type="text" className="border border-slate-500 p-2 rounded-md w-full" />
                    </div>
                </div>
              <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 flex w-full justify-center rounded-full" onClick={verify}>Verify Payment</button>
                </div>
            </div>
        </div>
     );
}
 
export default VerifyPayment;