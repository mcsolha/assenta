import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/financeiro")({
  component: () => (
    <Placeholder
      titulo="Financeiro"
      descricao="Resumo de total geral, recebido e a receber, com filtros por período."
      proximaSessao="sessão 4"
    />
  ),
});
