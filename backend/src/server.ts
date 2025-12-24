import Fastify from "fastify";

const app = Fastify({ logger: true});

app.get("/api/v1/health", async () => {
    return {"status": "ok"};
});

const port = Number(process.env.PORT ?? 8000);
const host = process.env.HOST ?? "127.0.0.1";

app.listen({port, host}).catch((err) => {
    app.log.error(err);
    process.exit(1);
})