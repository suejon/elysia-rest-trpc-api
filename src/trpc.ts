import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";
import { Elysia, t as T } from "elysia";

const t = initTRPC.create();
const p = t.procedure;

export const router = t.router({
  greet: p
    // 💡 Using Zod
    //.input(z.string())
    // 💡 Using Elysia's T
    .input(c(T.String()))
    .query(({ input }) => input),
});

export type Router = typeof router;


// const app = new Elysia().use(trpc(router)).listen(3000);
