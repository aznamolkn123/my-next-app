import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import WelcomeTemplate from "@/emails/welcomeTemplate";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password) return null;
                const user = await prisma.user.findUnique({
                    where: { email: credentials.username }
                });

                if (!user) return null
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedpassword!);

                return passwordMatch ? user : null;
            }
        })
        ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    events: {
        async createUser({ user }) {
            if (user.email) {
                WelcomeTemplate({ name: user.name || user.email });
            }
        },
    },
    session: {
        strategy: "jwt"
    }
}

const handlers = NextAuth(authOptions);
export { handlers as GET, handlers as POST }