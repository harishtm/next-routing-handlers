import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET (request: NextRequest) {
    // Two ways of retrieving the header
    // Approach one
    const requestHeader = new Headers(request.headers)
    console.log("Approach One -> ", requestHeader.get('Authorization'))

    // Approach two
    const headerList = headers()
    console.log("Approach Two -> ", headerList.get('Authorization'))
    return new Response("<h1>Profile API</h1>", {
        headers: {
            "Content-Type": "text/html"
        }
    })
}
