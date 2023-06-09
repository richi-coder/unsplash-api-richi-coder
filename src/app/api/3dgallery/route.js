import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query');
    const res = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}&client_id=${process.env.VITE_TEST_KEY}`)
    const data = await res.json();
    const results = data.results;
    return NextResponse.json(results);
}   