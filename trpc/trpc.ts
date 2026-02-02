import { initTRPC } from "@trpc/server";

const t = initTRPC.context<object>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
