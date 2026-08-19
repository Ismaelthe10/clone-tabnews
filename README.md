<p align="center">
  <img src="docs/curso-dev.png" alt="curso.dev: sentir-se competente em programação começa aqui." width="100%">
</p>

<h1 align="center">clone-tabnews</h1>

<p align="center">
  Implementação do clone do <a href="https://www.tabnews.com.br">TabNews</a>, construída passo a passo durante o
  <a href="https://curso.dev">curso.dev</a>.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-24-5FA04E?logo=nodedotjs&logoColor=white">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white">
  <img alt="Jest" src="https://img.shields.io/badge/Jest-30-C21325?logo=jest&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

---

## Sobre o projeto

Este repositório é a minha jornada dentro do **[curso.dev](https://curso.dev)**, do Filipe Deschamps.
A proposta é simples e brutalmente eficaz: em vez de estudar tecnologias soltas, você constrói um
produto real (um clone do TabNews) do primeiro `git init` até o deploy em produção, passando por
API, banco de dados, migrations, autenticação, testes automatizados e CI/CD.

## Por que o curso.dev vale a pena

Preciso registrar isso aqui, porque não é exagero: **o curso.dev é realmente excelente**.

- **Didática incrível.** Cada conceito chega na hora em que você sente a dor que ele resolve.
- **Muralha técnica e muralha de negócio.** O curso não forma só quem escreve código: forma quem
  entende o produto, o custo e a decisão por trás dele.
- **Ritmo de profissional.** Commits semânticos, pull requests, testes no CI, deploy.
- **Crescimento na prática.** Encarar erro e desafio de frente é parte do método, e é o que
  realmente faz evoluir.

O slogan resume bem: _sentir-se competente em programação começa aqui_. E é exatamente essa a
sensação depois de cada módulo. **Vale muito a pena.**

> Propaganda grátis e sem afiliado, só porque merece: **<https://curso.dev/>**

<p align="center">
  <a href="https://curso.dev/">
    <img alt="Conheça o curso.dev" src="https://img.shields.io/badge/conheça%20o-curso.dev-1E90FF?style=for-the-badge">
  </a>
</p>

## Stack

| Camada         | Tecnologia                                      |
| -------------- | ----------------------------------------------- |
| Runtime        | Node.js 24                                      |
| Front-end      | React 19 + Next.js 16 (Pages Router)            |
| Back-end       | Next.js API Routes + next-connect               |
| Banco de dados | PostgreSQL 16                                   |
| Migrations     | node-pg-migrate                                 |
| Autenticação   | bcryptjs + sessões via cookie                   |
| E-mail         | Nodemailer + MailCatcher (dev)                  |
| Testes         | Jest (unitários e de integração)                |
| Qualidade      | ESLint, Prettier, Husky, Commitlint, Commitizen |
| Infra local    | Docker Compose                                  |
| CI             | GitHub Actions                                  |

## Qualidade e convenções

- **Commits semânticos** (Conventional Commits), validados pelo Commitlint via hook do Husky.
- **ESLint + Prettier** rodando no CI a cada pull request.
- **Testes automatizados** no GitHub Actions antes de qualquer merge.

## Licença

Distribuído sob a licença [MIT](LICENSE).

---

<p align="center">
  Feito com dedicação por <a href="https://github.com/Ismaelthe10">Ismael</a> · estudando no
  <a href="https://curso.dev">curso.dev</a> 💙
</p>
