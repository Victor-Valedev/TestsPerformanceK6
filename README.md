# Projeto de Estudo 

Este repositório é um **projeto de estudo** baseado no conteúdo disponibilizado pelo canal [QAPapito](https://www.youtube.com/channel/UCyS67QG3w2mK9OXXVFSa-VQ). O objetivo é praticar e aprimorar os conhecimentos adquiridos ao seguir as aulas do referido canal.

## Descrição

O projeto foi originalmente desenvolvido e disponibilizado pelo canal **QAPapito**, e foi clonado neste repositório para fins de estudo e aprendizado. Através deste repositório, busquei realizar um aprofundamento prático, realizando modificações e explorando as soluções apresentadas nas aulas.

## Objetivo

O objetivo deste repositório é aprimorar os conhecimentos sobre testes de performance com k6, através da aplicação prática de conceitos aprendidos no curso.


# Introdução aos testes de performance com k6

<h1 align="left">
    <img src=".github/logo-stiker.svg" width="250px">
</h1>

# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [ ] O cadastro com sucesso deve ocorrer em até 2 segundos
- [ ] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [ ] Deve poder cadastrar até 100 usuários simultâneos
- [ ] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd curso-k6-basico/api
yarn install
yarn dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Projeto original e feito por Fernando Papito:
https://github.com/weareqacademy/curso-k6-basico
