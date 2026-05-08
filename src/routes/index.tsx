import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { AlugueisTable } from "@/features/alugueis/AlugueisTable";
import { MOCK_ALUGUEIS } from "@/features/alugueis/mocks";
import { formatBRL } from "@/lib/format";
import { cn } from "@/lib/utils";
import { STATUS_OCUPAM_ESTOQUE, type StatusAluguel } from "@/domain/tipos";

export const Route = createFileRoute("/")({
  component: AlugueisPage,
});

type FiltroStatus = "todos" | "confirmados" | "postergados";

function AlugueisPage() {
  const [filtro, setFiltro] = useState<FiltroStatus>("todos");
  const [mostrarEncerrados, setMostrarEncerrados] = useState(false);

  const lista = MOCK_ALUGUEIS.filter((a) => {
    const escondido: StatusAluguel[] = ["Encerrado", "Cancelado"];
    if (!mostrarEncerrados && escondido.includes(a.status)) return false;
    if (filtro === "confirmados" && a.status !== "Confirmado") return false;
    if (filtro === "postergados" && a.status !== "Postergado") return false;
    return true;
  });

  const ativos = MOCK_ALUGUEIS.filter((a) =>
    STATUS_OCUPAM_ESTOQUE.includes(a.status)
  );
  const totalMes = ativos.reduce(
    (acc, a) => acc + a.quantidade * a.valorUnitario,
    0
  );
  const recebidoMes = ativos.reduce((acc, a) => acc + a.pago, 0);
  const aReceber = totalMes - recebidoMes;

  return (
    <>
      <header className="flex flex-wrap items-end justify-between gap-6 mb-7">
        <div>
          <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-0.01em] mb-2">
            Aluguéis
          </h1>
          <p className="text-[15px] text-imbuia-mute">
            {ativos.length} ativos · 3 entregas próximas
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Filtrar por data</Button>
          <Button variant="primary">+ Novo aluguel</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Total do mês"
          value={formatBRL(totalMes)}
          meta={`${ativos.length} aluguéis ativos`}
        />
        <StatCard
          label="Recebido"
          value={formatBRL(recebidoMes)}
          meta={
            totalMes > 0
              ? `${Math.round((recebidoMes / totalMes) * 100)}% do total`
              : "—"
          }
        />
        <StatCard
          label="A receber"
          value={formatBRL(aReceber)}
          meta="Pendente de pagamento"
          accent
        />
      </section>

      <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
        {(
          [
            { id: "todos", label: "Todos" },
            { id: "confirmados", label: "Confirmados" },
            { id: "postergados", label: "Postergados" },
          ] as const
        ).map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={cn(
              "rounded-full border border-[rgba(42,29,20,.18)] px-3.5 py-1.5 text-[13px]",
              filtro === f.id
                ? "bg-imbuia text-linho border-imbuia"
                : "bg-transparent text-imbuia"
            )}
          >
            {f.label}
          </button>
        ))}
        <label className="ml-auto flex items-center gap-2 text-[13px] text-imbuia-mute cursor-pointer">
          <input
            type="checkbox"
            checked={mostrarEncerrados}
            onChange={(e) => setMostrarEncerrados(e.target.checked)}
            className="accent-ambar"
          />
          Mostrar encerrados e cancelados
        </label>
      </div>

      <AlugueisTable alugueis={lista} />
    </>
  );
}
