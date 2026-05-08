# Assenta

Sistema de gestão de aluguel de cadeiras de evento. Local-first, multi-dispositivo, offline.

> Substitui uma planilha usada para controlar aluguéis de cadeiras Dourada,
> Âmbar, Imbúia e Cristal — cadastrando clientes, calculando disponibilidade
> em tempo real e mantendo o resumo financeiro por período.

## Stack

| Camada | Tecnologia |
|---|---|
| Shell nativo | Tauri 2 (Windows, macOS, Linux, iOS, Android) |
| Camada nativa | Rust |
| Frontend | React 19 + TypeScript + Vite |
| Roteamento | TanStack Router (file-based) |
| Estado servidor / sync / auth | Jazz (local-first, CRDTs, Passkey) |
| Estilos | Tailwind CSS v4 |
| Forms | react-hook-form + zod |
| Datas | date-fns + locale pt-BR |
| Ícones | lucide-react |

## Princípios de segurança

- **Versões fixadas exatamente** no `package.json` (sem `^` ou `~`) — defesa contra typosquatting e upgrades silenciosos.
- **Postinstall scripts bloqueados por padrão** via `pnpm.onlyBuiltDependencies` — apenas `@tauri-apps/cli` e `esbuild` rodam scripts de instalação. Esta é a defesa direta contra o vetor usado em incidentes como o axios npm supply chain compromise (março/2026).
- **Zero variáveis de ambiente** no MVP. Configurações públicas vivem em `tauri.conf.json`. Quando segredos forem necessários, vão pro keyring do SO via Tauri Stronghold.
- **Lockfile commitado** + `prefer-frozen-lockfile=true`.
- **Repository pattern** (vai entrar com Jazz) isola persistência da UI — trocar backend custa pouco.
- **Backup automático em JSON** legível por humano (vai entrar como comando Rust) — independente do Jazz, sobrevive a qualquer mudança de tecnologia.

## Pré-requisitos

- Node.js >= 22 (ver `.nvmrc`)
- pnpm >= 10
- Rust (rustup): https://rustup.rs/
- Para builds mobile:
  - Android: Android Studio + JDK 17 + NDK
  - iOS: Xcode (apenas em macOS)

## Comandos

```bash
# Instalar deps
pnpm install

# Dev — frontend apenas (no navegador)
pnpm dev

# Dev — app Tauri desktop
pnpm tauri:dev

# Type check
pnpm typecheck

# Build de produção (web)
pnpm build

# Build do app desktop
pnpm tauri:build

# Auditoria de segurança das dependências
pnpm audit

# Mobile (configuração inicial)
pnpm tauri android init
pnpm tauri ios init      # apenas em macOS
```

## Design

- **Paleta:** Imbúia (`#2A1D14`) + Âmbar (`#B86A1C`) + Linho cru (`#F4ECDD`) + Tijolo (`#9A2A1F`, exclusivo de "Cancelado")
- **Tipografia:** Atkinson Hyperlegible — desenhada pelo Braille Institute para legibilidade máxima. Tamanho-base 16px, pesos 400 e 700.
- **Inspiração:** estética material brasileira de salão de festas — madeira nobre, luz quente, tecido cru. O oposto do SaaS frio.

Tokens de design em `src/styles/globals.css`.

## Estrutura

```
src/
├── routes/           # File-based routing (TanStack Router)
├── components/
│   └── ui/           # Componentes reutilizáveis (Button, StatCard, badges)
├── features/         # Domínios da aplicação (alugueis, clientes, etc)
├── domain/           # Tipos e regras puras de negócio
├── lib/              # Utilities (cn, format)
├── styles/           # globals.css com design tokens
└── main.tsx          # Bootstrap (Router + Query providers)

src-tauri/            # Camada nativa Rust
```

## Roadmap

- [x] **Sessão 1:** Setup, design system, tela de Aluguéis com mock
- [ ] **Sessão 2:** Schema Jazz, auth Passkey, sync entre dispositivos
- [ ] **Sessão 3:** CRUD completo de Aluguéis + validação de disponibilidade
- [ ] **Sessão 4:** Clientes (entidade + saldo agregado), Estoque, Financeiro
- [ ] **Sessão 5:** Histórico/Undo, backup automático em JSON (Rust)
- [ ] **Sessão 6:** PWA polish + build Android/iOS
