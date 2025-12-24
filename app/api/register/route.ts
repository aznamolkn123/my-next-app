import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";

const schema = z.object({
    email: z.string(),
    password: z.string().min(6)
})
export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json({ error: validation.error.issues }, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { email: body.email }

    })

    if (user)
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    const hashedpassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedpassword
        }
    })
    return NextResponse.json({ email: newUser.email });
}