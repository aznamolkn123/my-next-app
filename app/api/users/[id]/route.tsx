import { NextRequest, NextResponse } from "next/server";
import Schema from "../schema";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    if (id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ id: 1, name: "Alice" });

}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    const body = await request.json();
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const validation = Schema.safeParse(body);


    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });

    if (id > 10) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    else { return NextResponse.json({ id: 1, name: body.name }); }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    if (id > 10) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({});
}