import "./Layout.css";
import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";

import { QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../trpc/client";
import { queryClient, trpcClient } from "../trpc/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Content>{children}</Content>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 border-b border-gray-200">
      <Logo />
      <div className="flex gap-6">
        <Link href="/pokemon">Pokédex</Link>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <a href="/">
      <img src={logoUrl} height={64} width={64} alt="logo" />
    </a>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <main className="p-5 pb-12 flex-1">{children}</main>;
}
