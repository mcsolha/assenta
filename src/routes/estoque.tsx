import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/estoque")({
  component: () => (
    <Placeholder
      titulo="Estoque"
      descricao="Configuração de quantidade de cadeiras de cada tipo (Dourada, Âmbar, Imbúia, Cristal)."
      proximaSessao="sessão 4"
    />
  ),
});
