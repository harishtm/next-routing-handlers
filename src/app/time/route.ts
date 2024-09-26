export const dynamic = "force-dynamic";

/* 
    How to opt out of caching
        - dynamic mode in segment config option
        - using the Request object with GET method (as a param)
        - employing dynamic functions like headers() and cookies()
        - using any HTTP method other than GET
    Will not cache the Response 
*/

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}