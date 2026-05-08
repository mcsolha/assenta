import type { TipoCadeira } from "@/domain/tipos";

const SWATCH_STYLES: Record<TipoCadeira, string> = {
  Dourada:
    "bg-[linear-gradient(135deg,#E8C16A,#C49A3C)] border-[rgba(42,29,20,.15)]",
  "Âmbar": "bg-ambar border-[rgba(42,29,20,.15)]",
  "Imbúia": "bg-imbuia border-[rgba(42,29,20,.15)]",
  Cristal: "bg-white/70 border-[rgba(42,29,20,.25)]",
};

interface Props {
  tipo: TipoCadeira;
  quantidade?: number;
}

export function ChairTypeBadge({ tipo, quantidade }: Props) {
  return (
    <span className="inline-flex items-center gap-2 text-[14px]">
      <span
        aria-hidden
        className={`inline-block w-3.5 h-3.5 rounded-full border ${SWATCH_STYLES[tipo]}`}
      />
      <span>{tipo}</span>
      {quantidade !== undefined && (
        <>
          <span className="text-imbuia-mute">·</span>
          <span className="font-bold tabular">{quantidade}</span>
        </>
      )}
    </span>
  );
}
