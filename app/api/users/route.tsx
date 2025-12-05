import { NextRequest, NextResponse } from "next/server";
import Schema from "./schema";


export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Mariya" }

    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = Schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}