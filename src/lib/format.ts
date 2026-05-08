import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/**
 * Formata número como moeda brasileira (R$ 1.234,56).
 * Aceita valores negativos (saldo a favor do cliente).
 */
export function formatBRL(value: number): string {
  return brl.format(value);
}

/**
 * Formata data como "12/mai" (curto) ou "12 de maio" (longo).
 */
export function formatDate(
  date: Date | string,
  variant: "short" | "long" = "short"
): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, variant === "short" ? "dd/MMM" : "dd 'de' MMMM", {
    locale: ptBR,
  });
}
