import { compile as c, trpc } from "@elysiajs/trpc";
import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { plugin } from "./api/plugin";
import bearer from "@elysiajs/bearer";
import { router } from "./trpc";

const app = new Elysia()
  .use(bearer())
  .use(trpc(router))
  // .guard({
  //   response: t.String()
  // })
  .use(swagger())
  .use(plugin)
  .listen(3000)


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
