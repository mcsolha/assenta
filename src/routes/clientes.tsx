import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/clientes")({
  component: () => (
    <Placeholder
      titulo="Clientes"
      descricao="Cadastro de clientes, histórico de aluguéis e saldo agregado por cliente."
      proximaSessao="sessão 3"
    />
  ),
});
