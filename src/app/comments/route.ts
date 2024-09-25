import { NextRequest } from 'next/server';
import { comments } from './data' 

export async function GET (request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query")
    const filteredComments = query
        ? comments.filter(comment => comment.text.toLowerCase().includes(query.toLowerCase()))
        : []
    const response = query ? filteredComments : comments
    return Response.json(response)
}

export async function POST (request: Request) {
    const comment = await request.json()
    const newcomment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment), {
        headers: { 
            "Content-Type": "application/json"
        },
        status: 201
    })
}