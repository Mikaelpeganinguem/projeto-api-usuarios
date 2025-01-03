# API de Usuários - Express

--- 

Este é um projeto simples de gerenciamento de usuários que permite cadastrar, visualizar, editar e deletar usuários. Foi desenvolvido para praticar conceitos de desenvolvimento web utilizando Node.js, Express, EJS e File System (FS) para armazenamento de dados.

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
- EJS para a criação dos templates
- CSS para a estilização das páginas

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Mikaelpeganinguem/projeto-api-usuarios.git

2. **Instale as dependências**:

    ```bash
    npm i

3. **Inicie o servidor**:
    
    ```bash
    npm start

4. **Acesse a aplicação no navegador**
    
    ´´´bash
    http://localhost:3000


---

## Estrutura do projeto

api-usuarios/
├── public/                  # Arquivos estáticos (CSS, imagens, etc.)
│   ├── home.css
├── views/                   # Templates EJS
│   ├── users.ejs
│   ├── table.ejs
│   ├── partials/
│       ├── header.ejs
├── routes/                  # Rotas da aplicação
│   ├── user.js
│   ├── home.js
├── database/
│   ├── users/               # Simula o banco de dados
│       ├── dbUser.js
├── index.js                 # Arquivo principal
├── package.json             # Dependências e scripts do projeto
├── README.md                # Documentação do projeto


---

## Endpoints

### **Rotas principais**
-- 


### Contato

Se você tiver alguma dúvida ou quiser discutir sobre o projeto, pode entrar em contato!

- E-mail: carlosmikael273@gmail.com
- GitHub: [MIkaelpeganinguem](https://github.com/MIkaelpeganinguem)

Estou aberto a sugestões e contribuições!

