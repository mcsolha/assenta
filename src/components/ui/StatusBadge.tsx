import { cn } from "@/lib/utils";
import type { StatusAluguel } from "@/domain/tipos";

const STATUS_STYLES: Record<StatusAluguel, string> = {
  Confirmado: "bg-[rgba(184,106,28,.14)] text-[#8C4D11] before:bg-ambar",
  Postergado:
    "bg-[rgba(184,106,28,.07)] text-[#A77A4F] border border-dashed border-[rgba(184,106,28,.4)] before:bg-ambar-soft",
  Encerrado: "bg-[rgba(42,29,20,.08)] text-imbuia-mute before:bg-imbuia-mute",
  Cancelado: "bg-[rgba(154,42,31,.12)] text-tijolo line-through before:bg-tijolo",
};

interface Props {
  status: StatusAluguel;
}

export function StatusBadge({ status }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium tracking-[0.02em]",
        "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:inline-block",
        STATUS_STYLES[status]
      )}
    >
      {status}
    </span>
  );
}
