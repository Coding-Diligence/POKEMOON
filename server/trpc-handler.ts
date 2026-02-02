import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { enhance, type Get, type UniversalHandler } from "@universal-middleware/core";
import { appRouter } from "../trpc/server";
import { prisma } from "./db";

export const trpcHandler = ((endpoint) =>
  enhance(
    (request, context, runtime) => {
      return fetchRequestHandler({
        endpoint,
        req: request,
        router: appRouter,
        createContext({ req, resHeaders }) {
          return {
            ...context,
            ...runtime,
            req,
            resHeaders,
            prisma,
          };
        },
      });
    },
    {
      name: "my-app:trpc-handler",
      path: `${endpoint}/**`,
      method: ["GET", "POST"],
      immutable: false,
    },
  )) satisfies Get<[endpoint: string], UniversalHandler>;
