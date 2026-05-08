import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface NavItem {
  to: string;
  label: string;
}

const NAV: NavItem[] = [
  { to: "/", label: "Aluguéis" },
  { to: "/clientes", label: "Clientes" },
  { to: "/financeiro", label: "Financeiro" },
  { to: "/estoque", label: "Estoque" },
];

export function Sidebar() {
  return (
    <aside className="flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-8 bg-imbuia text-linho px-4 md:px-5 py-4 md:py-7 md:w-[232px] md:min-h-screen">
      <div className="font-bold text-[18px] md:text-[22px] leading-[1.15] tracking-[-0.005em] shrink-0">
        Assenta
        <small className="hidden md:block font-normal text-[11px] tracking-[0.18em] uppercase text-ambar-soft mt-2">
          Aluguel de Cadeiras
        </small>
      </div>

      <nav className="flex flex-row md:flex-col gap-0.5 flex-1 overflow-x-auto md:overflow-visible">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-2.5 rounded-[6px] px-3 py-2.5 text-[14px] font-medium whitespace-nowrap",
              "text-linho/70 hover:text-linho hover:bg-white/5"
            )}
            activeProps={{
              className: "!bg-ambar !text-linho",
            }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block mt-auto rounded-[6px] border border-linho/10 p-3 text-[13px] text-linho/75">
        Conectado como
        <strong className="block font-medium text-linho">Marcelo Solha</strong>
      </div>
    </aside>
  );
}
