import { NextRequest, NextResponse } from "next/server";
import Schema from "./schema";
import { prisma } from "@/app/lib/prisma";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = Schema.safeParse(body);

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })
    if (user)
        return NextResponse.json({ error: "User already exists" }, { status: 409 });

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    if (!validation.success)
        return NextResponse.json(validation.error.issues, { status: 400 });
    return NextResponse.json(newUser, { status: 201 })
}