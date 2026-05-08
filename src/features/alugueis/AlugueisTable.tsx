import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChairTypeBadge } from "@/components/ui/ChairTypeBadge";
import { formatBRL, formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Aluguel } from "@/domain/tipos";

interface Props {
  alugueis: Aluguel[];
}

export function AlugueisTable({ alugueis }: Props) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-[rgba(42,29,20,.07)] bg-linho-card shadow-[0_1px_0_rgba(42,29,20,.04),0_8px_24px_-16px_rgba(42,29,20,.18)]">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Cliente", "Período", "Cadeiras", "Total", "A pagar", "Status"].map(
              (h) => (
                <th
                  key={h}
                  className="bg-linho-deep border-b border-[rgba(42,29,20,.08)] px-4 py-3.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-imbuia-mute"
                >
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {alugueis.map((a) => {
            const total = a.quantidade * a.valorUnitario;
            const apagar = total - a.pago;
            return (
              <tr
                key={a.id}
                className="border-b border-[rgba(42,29,20,.06)] last:border-b-0 hover:bg-[rgba(184,106,28,.04)]"
              >
                <td className="px-4 py-4 align-middle text-[15px] font-bold">
                  {a.clienteNome}
                  <span className="block text-[12px] font-normal text-imbuia-mute mt-0.5">
                    {a.local}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle text-[15px] tabular">
                  <strong className="font-bold">{formatDate(a.dataEntrega)}</strong>
                  <span className="text-imbuia-mute mx-1.5">→</span>
                  <strong className="font-bold">{formatDate(a.dataRetirada)}</strong>
                </td>
                <td className="px-4 py-4 align-middle">
                  <ChairTypeBadge tipo={a.tipo} quantidade={a.quantidade} />
                </td>
                <td className="px-4 py-4 align-middle text-[15px] font-bold tabular">
                  {formatBRL(total)}
                </td>
                <td
                  className={cn(
                    "px-4 py-4 align-middle text-[15px] font-bold tabular",
                    apagar < 0 && "text-tijolo",
                    apagar === 0 && "text-imbuia-mute"
                  )}
                >
                  {apagar < 0
                    ? `−${formatBRL(Math.abs(apagar))}`
                    : formatBRL(apagar)}
                </td>
                <td className="px-4 py-4 align-middle">
                  <StatusBadge status={a.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
