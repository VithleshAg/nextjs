import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({message: "hello from Gwalior guys"});
}

export async function POST(request){
    const {cityName} = await request.json();
    return NextResponse.json({message: `Welcome to ${cityName} city`});
}