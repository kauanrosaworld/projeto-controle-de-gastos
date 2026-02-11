Controle de Gastos 💰

Projeto simples de controle de despesas e receitas usando Node.js, Express, MySQL e frontend em HTML/CSS/JS.
Permite adicionar transações e visualizar todas em uma tabela.

🚀 Tecnologias

Node.js

Express

MySQL

HTML, CSS e JS puro

projeto-controle-de-gastos/
├─ backend/
│  ├─ index.js
│  ├─ package.json
│  ├─ package-lock.json
│  ├─ meuBanco.env        # suas credenciais locais (não subir no Git)
│  └─ .env.example        # modelo pro Git, sem senha real
├─ frontend/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
└─ db/
   └─ create_table.sql    # script para criar banco e tabela


⚙️ Configuração

Clone o repositório:

git clone <url-do-repo>


Vá para o backend:

cd projeto-controle-de-gastos/backend


Instale dependências:

npm install


Crie o banco de dados e tabela no MySQL:

-- Dentro do MySQL
SOURCE ../db/create_table.sql;


Configure variáveis de ambiente:

Copie o .env.example para .env ou meuBanco.env:

cp .env.example meuBanco.env


Edite meuBanco.env com seus dados reais:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SUA_SENHA
DB_NAME=controledegastos
PORT=3000

🚀 Rodando o projeto

No backend, rode:

node index.js


Abra no navegador:

http://localhost:3000/index.html


Use o formulário para adicionar transações e veja a tabela atualizar em tempo real.

📝 Observações

Todas as transações são salvas no MySQL local.

Frontend separado para HTML, CSS e JS, fácil de estilizar.

Qualquer pessoa que clonar deve criar o próprio .env ou meuBanco.env.

💡 Dicas extras

Pode subir o projeto na Vercel para o frontend e manter o backend em algum servidor Node.

Se quiser, pode usar Docker para rodar MySQL e Node juntos, evitando problemas de ambiente.

Para funcionalidades extras, pense em adicionar edição e exclusão de transações.
