import "dotenv/config"
import { z } from "zod";

const ConfigSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    HOST: z.string().default("127.0.0.1"),
    PORT: z.coerce.number().int().min(1).max(65535).default(8000),
});

export const config = ConfigSchema.parse(process.env)