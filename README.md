# 🌳 AreaVerde - Interface Web

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Este repositório contém o **frontend** da aplicação AreaVerde, desenvolvido em React. Para o backend (API), acesse o repositório: **[areaverde-api](https://github.com/DougBrando/areaverde-api.git)**.

## 📖 Sobre o Projeto

O projeto AreaVerde é uma aplicação full-stack que permite o mapeamento e visualização de espaços verdes urbanos. A interface, construída com React, consome uma API REST para fornecer uma experiência de usuário interativa, limpa e moderna. A arquitetura de componentes segue os princípios do **Atomic Design**, garantindo um código organizado e escalável.

### A Evolução de uma Ideia

A semente deste projeto foi um **sistema de console em Java**, desenvolvido como um trabalho para a faculdade. O objetivo era simples: aplicar na prática os conceitos de Programação Orientada a Objetos. Você pode conferir o projeto que deu origem a tudo aqui:

* **Repositório Original (Java Console):** [github.com/DougBrando/AreaVerde](https://github.com/DougBrando/AreaVerde)

Após a conclusão, veio a reflexão: "E se este sistema pudesse ser acessado por qualquer pessoa, através de um navegador?". A partir dessa ideia, o projeto evoluiu. A lógica de negócio em Java foi transformada em uma poderosa **API REST com Spring Boot**, e esta interface em **React** foi criada do zero para consumir os dados, resultando em uma aplicação web completa e funcional.


**Homepage:**
<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/dfe8e992-9b7f-4219-be89-1e712f5d3d79" />

**Página de Listagem:**
<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/9fbf828c-a166-46f9-b220-d473af763b57" />


## ✨ Tecnologias Utilizadas

**Frontend (Este Repositório):**
* **React 18** (Criado com Vite)
* **React Router DOM** para roteamento de páginas
* **Axios** para chamadas à API
* **React Icons** para a iconografia
* **CSS Puro** para estilização
* **Atomic Design** como metodologia de arquitetura

**Backend (API):**
* **Java 17**
* **Spring Boot 3**
* **Maven** para gerenciamento de dependências
* **Jackson** para manipulação de JSON
* **Persistência** de dados em arquivo JSON local

## 🚀 Como Executar o Projeto

Para uma experiência completa, você precisará ter o **Backend (API) e o Frontend rodando simultaneamente**.

**Pré-requisitos:**
* Node.js (v18+)
* Java (JDK 17+)

### 1. Backend (API)

```bash
# Clone o repositório da API
git clone https://github.com/DougBrando/areaverde-api.git

# Navegue até a pasta do projeto
cd areaverde-api

# Rode a aplicação Spring Boot (pode demorar um pouco no primeiro build)
./mvnw spring-boot:run
```
✅ A API estará rodando em `http://localhost:8080`.

### 2. Frontend (Interface Web)

```bash
# Clone este repositório
git clone https://github.com/DougBrando/areaverde-frontend.git

# Navegue até a pasta do projeto
cd areaverde-frontend

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```
✅ A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 👨‍💻 Autor

**Douglas Graça**

* GitHub: [@DougBrando](https://github.com/DougBrando)
* LinkedIn: [Douglas Graça](https://www.linkedin.com/in/douglas-graca/)
