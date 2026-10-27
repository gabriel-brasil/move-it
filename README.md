# Move.it

Aplicativo de produtividade inspirado no método Pomodoro, com elementos de gamificação para incentivar pausas e exercícios durante o trabalho.

Este projeto foi desenvolvido com React e Next.js durante a Next Level Week 4 da [Rocketseat](https://rocketseat.com.br/).

![Move.it](https://raw.githubusercontent.com/gabriel-brasil/move-it/main/src/images/print-projeto.jpg)

## ✨ Funcionalidades

- Timer de foco com contagem regressiva de 25 minutos
- Desafios aleatórios de exercícios para o corpo ou para os olhos
- Sistema de experiência e nível, semelhante a um jogo
- Progresso por desafios concluídos
- Persistência do estado no navegador usando cookies
- Notificações e som de alerta ao iniciar um novo desafio
- Layout responsivo e moderno

## 🛠️ Stack

- Next.js
- React
- TypeScript
- CSS Modules
- js-cookie

## 📁 Estrutura do projeto

```text
move-it/
├── public/
│   ├── favicon.png
│   ├── notification.mp3
│   ├── logo-full.svg
│   └── icons/
├── src/
│   ├── components/
│   │   ├── ChallengeBox.tsx
│   │   ├── CompletedChallenges.tsx
│   │   ├── Countdown.tsx
│   │   ├── ExperienceBar.tsx
│   │   ├── LevelUpModal.tsx
│   │   └── Profile.tsx
│   ├── contexts/
│   │   ├── ChallengeContext.tsx
│   │   └── CountdownContext.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   ├── global.css
│   │   └── pages/
│   └── images/
├── challenges.json
├── package.json
├── tsconfig.json
├── yarn.lock
├── .gitignore
└── README.md
```

## 🚀 Como executar

Pré-requisitos:

- Node.js 14+
- Yarn (ou npm)

1. Clone o repositório:

```bash
git clone https://github.com/gabriel-brasil/move-it.git
cd move-it
```

2. Instale as dependências:

```bash
yarn install
```

3. Inicie o ambiente de desenvolvimento:

```bash
yarn dev
```

4. Abra no navegador:

```text
http://localhost:3000
```

## 🏗️ Build para produção

```bash
yarn build
```

Para rodar a versão pronta em produção:

```bash
yarn start
```

## 🧠 Como funciona

O app combina um cronômetro de foco com desafios de pausas ativas. Quando o contador termina, um novo exercício é exibido, o usuário pode completá-lo para ganhar experiência e subir de nível. O progresso é salvo no navegador para manter o estado entre acessos.

## 📌 Observações

- O projeto utiliza cookies para persistir `level`, `currentExperience` e `challengeCompleted`.
- As notificações do navegador e o áudio de alertas ajudam a lembrar o usuário de iniciar ou concluir uma pausa.
- A imagem da tela inicial pode ser localizada em `src/images/print-projeto.jpg`.

## 📄 Licença

Este projeto é destinado para fins educacionais e de demonstração.
