# 🌳 AreaVerde - Interface Web

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)

## 📖 Sobre o Projeto

Este projeto é a interface web para o sistema **AreaVerde**, desenvolvido em React. Ele consome uma API REST em Java/Spring para permitir o cadastro e a visualização de áreas verdes, como parques e praças.

A interface foi construída com foco em uma experiência de usuário limpa e moderna, utilizando a arquitetura **Atomic Design** para a organização de componentes, garantindo escalabilidade e manutenção.

### A História por Trás do Código

O projeto AreaVerde nasceu como um **sistema de console em Java**, desenvolvido para a disciplina de Programação Orientada a Objetos da faculdade. O objetivo original era aplicar conceitos de POO em um contexto prático e com relevância ambiental. Você pode conferir o projeto original aqui:

* **Repositório Original (Java Console):** [github.com/DougBrando/AreaVerde/](https://github.com/DougBrando/AreaVerde/)

Após finalizar a versão console, surgiu a ideia: "E se eu transformasse essa lógica em uma API de verdade para ser consumida por um frontend moderno?". Foi assim que este projeto full-stack nasceu, evoluindo a aplicação Java para uma **API REST com Spring Boot** e construindo esta **interface interativa com React**.

## 📸 Demonstração

[INSERIR AQUI UM GIF DA APLICAÇÃO FUNCIONANDO: NAVEGANDO ENTRE AS PÁGINAS, CADASTRANDO UM NOVO PARQUE E VENDO A LISTA ATUALIZAR]

**Homepage:**
![Homepage com a seção Hero e o preview dos cards]([INSERIR SCREENSHOT DA HOMEPAGE AQUI])

**Página de Listagem:**
![Página com todos os cards das áreas verdes]([INSERIR SCREENSHOT DA PÁGINA DE LISTAGEM AQUI])

## ✨ Tecnologias Utilizadas

Este é um projeto full-stack. As tecnologias foram divididas entre o Frontend e o Backend.

**Frontend:**
* **React 18** (com Vite)
* **React Router DOM** para roteamento
* **React Icons** para a iconografia
* **CSS Puro** para estilização
* **Atomic Design** como metodologia de arquitetura de componentes

**Backend (API):**
* **Java 17**
* **Spring Boot 3**
* **Maven** para gerenciamento de dependências
* **Jackson** para serialização/desserialização JSON
* **Persistência** em arquivo JSON local

## 📂 Estrutura de Pastas (Frontend)

O frontend foi organizado utilizando os princípios do **Atomic Design** para promover a reutilização e a clareza dos componentes.

```
src/
├── assets/         # Imagens e ícones
├── components/
│   ├── atoms/      # Componentes básicos (Button, Input)
│   └── organisms/  # Componentes complexos (Header, Form, Card)
├── pages/          # Páginas da aplicação (HomePage, CadastroPage)
├── templates/      # Layouts de página (Layout principal com header)
├── App.jsx         # Configuração das rotas
└── main.jsx        # Ponto de entrada da aplicação
```

## 🚀 Como Executar o Projeto

Para rodar este projeto, você precisará ter o **Backend (API) e o Frontend rodando simultaneamente**.

**Pré-requisitos:**
* Node.js (v18+)
* Java (JDK 17+)
* Maven

**1. Clone e rode o Backend (API):**
```bash
# Clone o repositório da API 
git clone [preencher]
cd [preencher]

# Rode a aplicação Spring Boot
./mvnw spring-boot:run
# A API estará rodando em http://localhost:8080
```

**2. Clone e rode o Frontend:**
```bash
# Clone este repositório
git clone https://github.com/DougBrando/areaverde-frontend.git
cd areaverde-frontend

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
# A aplicação estará disponível em http://localhost:5173 (ou outra porta indicada)
```

## 👨‍💻 Autor

**Douglas Graça**

* GitHub: [@DougBrando](https://github.com/DougBrando)
* LinkedIn: [Douglas Graça](https://www.linkedin.com/in/douglas-graca/)