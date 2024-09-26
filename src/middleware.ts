import { NextResponse, type NextRequest } from "next/server";


/*

// Config based middleware

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
    matcher: "/profile"
}

*/


/*

// Conditional Middleware

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/hello", request.url))
    }
}

*/

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if(!themePreference) {
        response.cookies.set("theme", "dark")
    }
    return response
}
