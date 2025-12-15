import * as z from "zod";
const Schema = z.object({
    name: z.string().min(3),
    email: z.string()
});

export default Schema;