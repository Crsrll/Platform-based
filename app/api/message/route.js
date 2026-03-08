export async function GET(request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get("name");
    return Response.json({
        message: name ? `Hello, ${name}!` : "Successfully connected to the route.js"
    });
}