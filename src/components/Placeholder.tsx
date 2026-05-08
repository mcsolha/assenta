interface Props {
  titulo: string;
  descricao: string;
  proximaSessao: string;
}

export function Placeholder({ titulo, descricao, proximaSessao }: Props) {
  return (
    <div className="flex flex-col items-start max-w-prose">
      <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-0.01em] mb-3">
        {titulo}
      </h1>
      <p className="text-[16px] text-imbuia-soft mb-6">{descricao}</p>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(184,106,28,.14)] text-[#8C4D11] px-3 py-1 text-[12px] font-medium tracking-[0.02em]">
        Em construção · prevista para {proximaSessao}
      </span>
    </div>
  );
}
