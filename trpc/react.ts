import { httpBatchLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient } from "@trpc/client";
import type { AppRouter } from "./server";

export const queryClient = new QueryClient();

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
