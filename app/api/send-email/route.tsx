import { Resend } from "resend";
import WelcomeTemplate from "../../../emails/welcomeTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "aznawaditwaiba@gmail.com",
        subject: "Test Email",
        react: <WelcomeTemplate name="Asna" />

    })
    return NextResponse.json({})
}