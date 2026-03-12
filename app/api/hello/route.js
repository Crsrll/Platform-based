export async function GET(request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get("name");
    return Response.json({
        message: name ? `Hello, ${name}! What a wonderful day it it to die! You have successfully connected to the route.js` : "Successfully connected to the route.js"
    });
}