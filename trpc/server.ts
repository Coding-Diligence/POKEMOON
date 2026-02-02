import { initTRPC } from "@trpc/server";
import type { PrismaClient } from "../generated/prisma";
import { pokemonRouter } from "./routers/pokemon";
type Context = {
  prisma: PrismaClient;
  req: Request;
  resHeaders: Headers;
};

/**
 * Initialization of tRPC backend
 */
const t = initTRPC.context<Context>().create();

/**
 * Helpers
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * App router
 */
export const appRouter = router({
  demo: publicProcedure.query(() => {
    return { demo: true };
  }),

  pokemon: pokemonRouter,

  onNewTodo: publicProcedure
    .input((value): string => {
      if (typeof value === "string") return value;
      throw new Error("Input is not a string");
    })
    .mutation(async ({ input }) => {
      console.log("Received new todo", { text: input });
    }),
});

export type AppRouter = typeof appRouter;
