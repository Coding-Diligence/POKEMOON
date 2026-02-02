import { trpc } from "../../trpc/client";

export default function PokemonPage() {
  const { data, isLoading, error } = trpc.pokemon.list.useQuery({
    limit: 30,
    offset: 0,
  });

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Pokédex</h1>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {data.map((p) => (
          <li key={p.id} className="rounded border p-3">
            <div className="text-sm text-gray-500">#{p.id}</div>
            <div className="capitalize font-medium">{p.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
