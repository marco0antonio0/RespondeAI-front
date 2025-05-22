# 🧠 RespondeAI Frontend
![Group 1](https://github.com/user-attachments/assets/e93b3064-9d90-4a51-a1bf-20bcbd9f7591)

Este é o frontend do projeto **RespondeAI**, uma aplicação SaaS para correção automatizada de cartões-resposta com inteligência artificial. Este repositório contém a interface web construída em **Next.js + React + Backend-python**, projetada para oferecer uma experiência fluida, moderna e intuitiva.

---

## 🚀 O que é o RespondeAI?

O **RespondeAI** é uma plataforma que permite ao usuário:

- Escanear gabaritos de prova com poucos cliques
- Obter correção automática a partir de imagem base64
- Gerar cartões-resposta personalizados em PDF
- Visualizar resultados e estatísticas em tempo real
- Integrar com APIs próprias documentadas via Swagger

---

## 🧱 Estrutura do Projeto

```
respondeAIFront/
├─ components/                  # Componentes reutilizáveis (UI, seções, inputs, modais, etc.)
│  ├─ section/                 # Seções da landing page (promo, post, etc.)
│  ├─ modal/                   # Modais de login/cadastro
│  └─ userShowElement/         # Exibição de criadores ou usuários
├─ pages/                      # Rotas principais da aplicação
│  ├─ api/                    # Endpoints da API (ex: listar vozes, velocidades, gerar áudio)
│  └─ index.tsx              # Página inicial (landing page)
├─ public/                     # Arquivos estáticos (imagens, ícones, logo, etc.)
│  ├─ icons/                 # Ícones visuais utilizados nas seções
│  ├─ promo/                 # Imagens promocionais da interface
├─ service/                    # Integrações com APIs externas
├─ styles/                     # Estilos globais (Tailwind)
├─ utils/                      # Utilitários diversos
├─ Dockerfile                  # Configuração para containerização
├─ next.config.mjs             # Configurações do Next.js
└─ tailwind.config.ts          # Customizações do Tailwind CSS
```

---

## 💻 Tecnologias Utilizadas

- **Next.js** – Framework React fullstack
- **React** – Biblioteca de UI
- **Tailwind CSS** – Estilização responsiva e utilitária
- **HeroUI** – Biblioteca de componentes UI
- **TypeScript** – Tipagem estática para segurança de código
- **Docker** – Suporte para execução em container

---

## 🧩 Funcionalidades do Frontend

- 🧠 **Landing page institucional** com CTA direto para as funcionalidades principais
- 📤 Upload e envio de cartões-resposta para correção
- 🧾 Geração de gabarito em branco via botão de navegação
- 📊 Visualização de resultados processados
- 🔒 Modais de login/cadastro prontos para integração
- 🎨 Design limpo, responsivo e com foco em usabilidade

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/marco0antonio0/RespondeAI-front
cd RespondeAI-front
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse em `http://localhost:3000`.

---

## 🌐 Produção com Docker

```bash
docker build -t respondeai-frontend .
docker run -p 3000:3000 respondeai-frontend
```

---

## 🛠️ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, sugestões ou correções.

---

## ✨ Desenvolvedores

- [Marco Antonio da Silva Mesquita](https://github.com/marco0antonio0)

---

## 📄 Licença

Distribuído sob a licença MIT.
