# 📚 Sistema de Gerenciamento de Leituras

Aplicação backend desenvolvida para gerenciamento e acompanhamento de leituras, permitindo organizar livros, controlar o progresso de leitura e gerenciar informações relacionadas aos usuários e suas leituras.

## 🚀 Tecnologias Utilizadas

- NestJS
- Prisma ORM
- PostgreSQL
- TypeScript
- Node.js

## 📚 Funcionalidades

- Cadastro de usuários
- Autenticação de usuários
- Cadastro de livros
- Listagem de livros
- Atualização de informações dos livros
- Remoção de livros
- Controle de status de leitura
- Gerenciamento de progresso das leituras
- Organização das leituras por usuário
- API RESTful

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado
- npm ou yarn

## 🔧 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/database"
PORT=3000
JWT_SECRET=your_secret_key
```

## 🗄️ Banco de Dados

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

Gerar o client do Prisma:

```bash
npx prisma generate
```

## ▶️ Executando o Projeto

### Desenvolvimento

```bash
npm run start:dev
```

### Produção

```bash
npm run build
npm run start:prod
```

## 📌 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev

# Build da aplicação
npm run build

# Produção
npm run start:prod

# Executar testes
npm run test

# Rodar migrations
npx prisma migrate dev

# Prisma Studio
npx prisma studio
```

## 📖 Endpoints da API

| Método | Rota | Descrição |
|--------|-------|------------|
| GET | `/books` | Listar livros |
| POST | `/books` | Cadastrar livro |
| PATCH | `/books/:id` | Atualizar livro |
| DELETE | `/books/:id` | Remover livro |
| GET | `/users` | Listar usuários |

## 🧩 Status de Leitura

Os livros podem possuir diferentes status:

- 📖 Ler = Read
- ✅ Lendo = Reading
- ⏳ Lido = Completed

## 📄 Licença

Este projeto está sob a licença MIT.
