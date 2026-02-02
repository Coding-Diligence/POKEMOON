import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { listPokemon, getPokemonByName } from "../../api/services/pokeApi";

export const pokemonRouter = router({
  list: publicProcedure
    .input(
      z
        .object({
          limit: z.number().optional(),
          offset: z.number().optional(),
        })
        .optional()
    )
    .query(({ input }) => {
      return listPokemon(input?.limit ?? 20, input?.offset ?? 0);
    }),

  byName: publicProcedure
    .input(z.object({ nameOrId: z.string() }))
    .query(({ input }) => {
      return getPokemonByName(input.nameOrId);
    }),
});
