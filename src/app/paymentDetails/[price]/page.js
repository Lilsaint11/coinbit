"use client"
import Link from "next/link";
import { useParams } from 'next/navigation'

const PaymentDetails = () => {
    const params = useParams()
    let btc = 29418.60
    let amtConversion = (params.price/btc).toFixed(4)
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5  pt-20 flex items-center justify-center text-black">
            <div className="bg-white rounded-xl p-5 max-[450px]:p-3 w-[500px] ">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Commencing Transaction...</h3>
                    <div className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Amount to deposit(Proposed) :</h4>
                        <h4 className="font-bold">${params.price} USD({amtConversion} BTC)</h4>
                    </div>
                    <div  className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Total Fees :</h4>
                        <h4 className="font-bold">$10 USD</h4>
                    </div>
                    <div  className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Sum Total :</h4>
                        <h4 className="font-bold">${parseInt(params.price) + 10} USD</h4>
                    </div>
                    <div  className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Proposed Transaction Duration :</h4>
                        <h4 className="font-bold">10 mins</h4>
                    </div>
                    <Link href={ `/verifyPayment/${amtConversion}`}><button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 flex w-full justify-center rounded-full">Continue to Payment</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentDetails;