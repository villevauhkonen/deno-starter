import { Application } from "../deps/oak.ts";
const app = new Application();

// Logger
app.use(async ({ request, response }, next) => {
  await next();
  const rt = response.headers.get("X-Response-Time");
  console.log(`${request.method} ${request.url} - ${rt}`);
});

// Timing
app.use(async ({ request, response }, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello World!
app.use(({ request, response }) => {
  response.body = "Hello World!";
});

console.log("Server running on port 8080");
await app.listen({ port: 8080 });
