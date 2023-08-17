"use client"
import Link from "next/link";
import { useParams } from 'next/navigation'

const PaymentDetails = () => {
    const params = useParams()
    let btc = 29418.60
    let amtConversion = (params.price/btc).toFixed(4)
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 pt-20 flex items-center justify-center">
            <div className="bg-white rounded-xl p-5 w-[500px] ">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Commencing Transaction...</h3>
                    <div className="flex gap-5">
                        <h4>Amount to deposit :</h4>
                        <h4 className="font-bold">${params.price} USD({amtConversion} BTC)</h4>
                    </div>
                    <div  className="flex gap-5">
                        <h4>Total Fees :</h4>
                        <h4 className="font-bold">$20 USD</h4>
                    </div>
                    <div  className="flex gap-5">
                        <h4>Sum Total :</h4>
                        <h4 className="font-bold">${parseInt(params.price) + 20} USD</h4>
                    </div>
                    <div  className="flex gap-5">
                        <h4>Proposed Transaction Duration :</h4>
                        <h4 className="font-bold">10 mins</h4>
                    </div>
                    <Link href={ `/verifyPayment/${amtConversion}`}><button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 flex w-full justify-center rounded-full">Continue to Payment</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentDetails;