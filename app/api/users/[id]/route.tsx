import { NextRequest, NextResponse } from "next/server";
import Schema from "../schema";
import { prisma } from "@/app/lib/prisma";
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    })
    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);

}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const body = await request.json();
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const validation = Schema.safeParse(body);


    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    })
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser);

}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    })
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({
        where: { id: parseInt(id) }
    })
    return NextResponse.json({});
}