import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    {
      source: "/",
    },
  ],
};

// export function middleware(request: NextRequest){
//   if(request.nextUrl.pathname === '/about'){
//     return NextResponse.rewrite(new URL('/', request.url));
//   }
// }
