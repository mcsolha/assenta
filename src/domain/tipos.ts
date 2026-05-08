/**
 * Tipos do domínio — independentes da camada de persistência (Jazz).
 * Estes tipos descrevem entidades de negócio e podem ser usados em
 * regras puras (disponibilidade, financeiro) sem acoplamento ao backend.
 */

export const TIPOS_CADEIRA = [
  "Dourada",
  "Âmbar",
  "Imbúia",
  "Cristal",
] as const;
export type TipoCadeira = (typeof TIPOS_CADEIRA)[number];

export const STATUS_ALUGUEL = [
  "Confirmado",
  "Postergado",
  "Cancelado",
  "Encerrado",
] as const;
export type StatusAluguel = (typeof STATUS_ALUGUEL)[number];

export interface Cliente {
  id: string;
  nome: string;
  telefone?: string;
  criadoEm: Date;
}

export interface Aluguel {
  id: string;
  clienteId: string;
  clienteNome: string; // denormalizado para listagem
  local: string;
  dataEntrega: Date;
  dataRetirada: Date;
  tipo: TipoCadeira;
  quantidade: number;
  valorUnitario: number;
  pago: number;
  status: StatusAluguel;
  observacao?: string;
  criadoEm: Date;
  atualizadoEm: Date;
}

/** Status que ocupam estoque (para cálculo de disponibilidade). */
export const STATUS_OCUPAM_ESTOQUE: ReadonlyArray<StatusAluguel> = [
  "Confirmado",
  "Postergado",
];
