import "./Layout.css";
import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 border-b border-gray-200">
      <Logo />
      <div className="flex gap-6">
        <Link href="/exemple">Exemple de lien</Link>
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
  return (
    <main className="p-5 pb-12 flex-1">
      {children}
    </main>
  );
}