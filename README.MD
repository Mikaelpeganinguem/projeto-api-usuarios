# Projeto API de Usuários - Express

Este é um projeto simples de API RESTful utilizando Node.js e Express. A API gerencia usuários, armazenando-os em um arquivo JSON (`users.json`). Ela suporta as operações básicas de CRUD (Create, Read, Update, Delete) para usuários, permitindo adicionar, listar, atualizar e deletar usuários.

## Funcionalidades

- **GET** `/api/users`: Lista todos os usuários cadastrados.
- **GET** `/api/users/:id`: Retorna os detalhes de um usuário específico, dado seu ID.
- **POST** `/api/users`: Cria um novo usuário.
- **PUT** `/api/users/:id`: Atualiza os dados de um usuário específico.
- **DELETE** `/api/users/:id`: Deleta um usuário específico.

## Tecnologias Utilizadas

- Node.js
- Express.js
- File System (fs) para leitura e escrita de arquivos JSON

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Mikaelpeganinguem/projeto-api-usuarios.git

2. **Instale as dependências**:

    ```bash
    npm init

3. **Inicie o servidor**:
    
    ```bash
    npm start


---

### Possíveis modificações
Este projeto receberá futuramente uma inteface web (com HTML e CSS), e um banco de dados (MySQL). Além de melhorias no código, atual como melhoria nas verificações, mensagens mais claras e etc.

---

### Autor
- Mikael Carlos Ribeiro de França
- Pessoal: carlosmikael273@gmail.com
- Institucional: mcrf1@aluno.ifal.edu.br
