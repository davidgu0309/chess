import Fastify from "fastify";
import { config } from "./config"

const app = Fastify({ logger: true});

app.get("/api/v1/health", async () => {
    return {"status": "ok"};
});

app.listen({port: config.PORT, host: config.HOST}).catch((err) => {
    app.log.error(err);
    process.exit(1);
})