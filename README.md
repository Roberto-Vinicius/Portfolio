# Portfólio & Projeto Editorial Astro

Website e portfólio interativo construído com [Astro](https://astro.build), TypeScript e WebGL/Three.js, com suporte a múltiplos idiomas (Inglês e Espanhol), efeitos de partículas, transições espaciais imersivas e carregamento estático de alta performance.

## 🚀 Tecnologias

- **Framework:** [Astro](https://astro.build)
- **Linguagem:** TypeScript / JavaScript
- **Renderização Visual:** Three.js / WebGL (Efeito de espaço/wormhole e partículas no título)
- **Estilização:** CSS moderno responsivo com suporte a modo reduzido de movimento
- **Internacionalização (i18n):** Rotas estáticas localizadas (`/en/` e `/es/`)

## 📂 Estrutura do Código

```text
├── docs/                # Capturas de tela e assets de visualização
├── public/              # Arquivos públicos e assets estáticos (mídias, texturas WebGL)
│   ├── media/           # Imagens e capas dos projetos/livros
│   └── vendor/          # Dependências e assets de animação Three.js
├── src/
│   ├── components/      # Componentes reutilizáveis (Card, SEO, Consentimento, Wormhole)
│   ├── data/            # Dados do portfólio, projetos e termos legais
│   ├── layouts/         # Layout base com meta tags e casca HTML
│   ├── pages/           # Rotas do Astro (index, páginas localizadas e páginas legais)
│   ├── scripts/         # Lógica client-side para animação de partículas e transições
│   └── styles/          # Folhas de estilo globais
├── astro.config.mjs     # Configuração principal do Astro
└── tsconfig.json        # Configurações do TypeScript
```

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (v18+)
- npm / pnpm / yarn

### Instalação e Desenvolvimento
```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:4321` no navegador.

### Build de Produção
```bash
# Gerar a versão estática otimizada
npm run build

# Pré-visualizar o build localmente
npm run preview
```

## 📄 Licença e Atribuições
Distribuído sob a licença MIT. Para detalhes sobre bibliotecas e assets de terceiros utilizados nos efeitos visuais, consulte o arquivo [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
