
import {GiTakeMyMoney} from "react-icons/gi"
import {TbMoneybag} from "react-icons/tb"
import {FcMoneyTransfer} from "react-icons/fc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Chart from "../components/chart";




export default async function Dashboard () {
    const columns = [
        { id: "product_name", label: "Product Name" },
        { id: "date", label: "Date" },
        { id: "transaction_id", label: "Transaction Id" },
        { id: "amt", label: "Amount" },
        { id: "sales", label: "Sales" },
      ];
      
    const cryptoResults = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
      ).then((res) => res.json());
    const marketChart = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=300"
    ).then((res) => res.json());
     
    const graphData = marketChart.prices.map((price)=> {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString('en-us')
     return {
       Date:date,
       Price: p,
     }
    })
      
    return ( 
        <div className="bg-gradient-to-tl from-blue-900 to-black text-white pb-10 px-5 pt-10 flex flex-col gap-5 pl-60">
            <div>
                <div>
                    <h3 className="text-xl">Balance Overview</h3>
                    <p className="text-[12px] text-slate-500">monitor how your investment is working</p>
                </div>
                <div className="flex gap-10 mt-5">
                    <div className="bg-white text-black w-80 h-28 rounded-lg flex flex-col justify-center pl-5 gap-3">
                        <span className="flex gap-1 items-center">
                            <GiTakeMyMoney className="text-4xl"/>
                            <p className="text-[15px]">Amount Invested</p>
                        </span>
                        <h2 className="text-4xl font-semibold ">$1200.00</h2>
                    </div>
                    <div className="bg-white text-black w-80 h-28 rounded-lg flex flex-col justify-center pl-5 gap-3">
                        <span className="flex gap-1 items-center">
                            <TbMoneybag className="text-4xl"/>
                            <p className="text-[15px]">Expected Returns</p>
                        </span>
                        <h2 className="text-4xl font-semibold">$3000.00</h2>
                    </div>
                    <div className="bg-white text-black w-80 h-28 rounded-lg flex flex-col justify-center pl-5 gap-3">
                        <span className="flex gap-1 items-center">
                            <FcMoneyTransfer className="text-4xl"/>
                            <p className="text-[15px]">Amount Withdrawn</p>
                        </span>
                        <h2 className="text-4xl font-semibold">$0.00</h2>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200 w-full h-[400px] flex justify-center items-center rounded-xl">
             <Chart graphData = {graphData}/>
            </div>
            <div>
            <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="Vendors Table">
              <TableHead>
                <TableRow className="text-white">
                  <TableCell className="text-white">#</TableCell>
                  <TableCell className="text-white">Coin </TableCell>
                  <TableCell className="text-white">Price</TableCell>
                  <TableCell className="text-white">24h</TableCell>
                  <TableCell className="text-white">Volume</TableCell>
                  <TableCell className="text-white">Market Cap</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="text-white">
              {cryptoResults.map((result) => (
                  <TableRow>
                    <TableCell className="text-white">{result.market_cap_rank} </TableCell>
                <TableCell className="text-white">
                    <div  className="flex items-center gap-2">
                        <img src={result.image} alt="" className="w-8"/> 
                        {result.symbol}
                    </div>    
                </TableCell>
                <TableCell className="text-white">${result.current_price} </TableCell>
                <TableCell className="text-white">{result.total_volume} </TableCell>
                <TableCell className="text-white">${result.market_cap} </TableCell>
                <TableCell className={`text-green-500 ${(result.price_change_percentage_24h < 0) && "text-red-500"}`}>{(result.price_change_percentage_24h).toFixed(2)}% </TableCell>
                    </TableRow>
                  )    
                 )}
              </TableBody>
            </Table>
          </TableContainer>
            </div>
        </div>
     );
}
 