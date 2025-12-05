import { NextRequest, NextResponse } from "next/server";
import Schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Milk", price: 10 },
        { id: 2, name: "Curd", price: 15 }

    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = Schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });

    return NextResponse.json({ id: 3, name: body.name, price: body.price }, { status: 201 })


}