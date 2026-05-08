import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string;
  meta?: string;
  accent?: boolean;
}

export function StatCard({ label, value, meta, accent }: Props) {
  return (
    <div
      className={cn(
        "rounded-[6px] border border-[rgba(42,29,20,.07)] bg-linho-card px-[22px] py-5",
        "shadow-[0_1px_0_rgba(42,29,20,.04),0_8px_24px_-16px_rgba(42,29,20,.18)]"
      )}
    >
      <div className="text-[12px] uppercase tracking-[0.12em] font-medium text-imbuia-mute">
        {label}
      </div>
      <div
        className={cn(
          "mt-2 text-[30px] font-bold leading-[1.1] tracking-[-0.015em] tabular",
          accent && "text-ambar"
        )}
      >
        {value}
      </div>
      {meta && <div className="mt-1.5 text-[14px] text-imbuia-mute">{meta}</div>}
    </div>
  );
}
