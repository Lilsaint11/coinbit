import { NextResponse } from "next/server";
import Cookies from "js-cookie"
export default function middleware(req){
    const response = new NextResponse()
    const cookieState = Cookies.get('loggedin')
    let cookie = req.cookies.get("loggedin");
    if (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/investment-record') || req.nextUrl.pathname.startsWith('/profile') || req.nextUrl.pathname.startsWith('/paymentDetails') || req.nextUrl.pathname.startsWith('/verifyPayment')){
    if(!cookie){
        return NextResponse.redirect(new URL ('/signin',req.nextUrl))
    }else{
        NextResponse.next()
    }
    }
    if (req.nextUrl.pathname.startsWith('/signin') || req.nextUrl.pathname.startsWith('/signup')) {
        if(cookie){
            return NextResponse.redirect(new URL ('/dashboard',req.nextUrl))
        }else{
            NextResponse.next()
        }
    }
    
}
