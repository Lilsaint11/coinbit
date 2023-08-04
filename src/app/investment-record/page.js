import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const InvestmentRecord = () => {
    return ( 
        <div className="pl-80 bg-gradient-to-tl from-blue-900 to-black px-28 w-full h-screen">
             <div className="pt-20 flex flex-col items-center gap-5 justify-center mb-10">
                <h3 className=" text-white text-6xl font-semibold">Investment Record</h3>
                <p className="text-center text-[14px] text-slate-400">Track your investments record to see how much you have come</p>
            </div>
            <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="Vendors Table">
              <TableHead>
                <TableRow >
                  <TableCell className="text-slate-300">Plan</TableCell>
                  <TableCell className="text-slate-300">Amount Invested</TableCell>
                  <TableCell className="text-slate-300">Investment Date</TableCell>
                  <TableCell className="text-slate-300">Returns</TableCell>
                  <TableCell className="text-slate-300">Expected Returns Date</TableCell>
                  <TableCell className="text-slate-300">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="text-white">
                    <TableRow>
                        <TableCell className="text-white">Basic</TableCell>
                        <TableCell className="text-white">$250</TableCell>
                        <TableCell className="text-white">26-07-23</TableCell>
                        <TableCell className="text-white">$500</TableCell>
                        <TableCell className="text-white">03-08-23</TableCell>
                        <TableCell className="text-white">Paid</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-white">Standard</TableCell>
                        <TableCell className="text-white">$1200</TableCell>
                        <TableCell className="text-white">04-08-23</TableCell>
                        <TableCell className="text-white">$3000</TableCell>
                        <TableCell className="text-white">18-08-23</TableCell>
                        <TableCell className="text-white">Unpaid</TableCell>
                    </TableRow>    
              </TableBody>
            </Table>
          </TableContainer>
        </div>
     );
}
 
export default InvestmentRecord;