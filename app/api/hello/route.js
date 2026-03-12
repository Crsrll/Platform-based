export async function GET(request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get("name");
    return Response.json({
        message: name ? `Hello, ${name}! I hope you have a wonderful day today 😁! You have successfully connected to the route.js` : "Successfully connected to the route.js"
    });
}