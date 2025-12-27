import { withAuth } from "next-auth/middleware"

export default withAuth({
    // This helps ensure the middleware knows exactly where to send users
    pages: {
        signIn: "/login",
    },
})

export const config = {
    // Ensure this matches your actual dashboard path
    matcher: ["/dashboard/:path*"],
}