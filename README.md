🚀 Bot de Integração com Telegram

Aplicação desenvolvida para testar a integração entre front-end, back-end e bot do Telegram, com autenticação de usuários e envio de produtos de lojas parceiras.

📌 Funcionalidades

- Tela de login com autenticação segura (usuário e senha).
- Registro de usuário com senha criptografada (hash) no momento da criação.
- Banco de dados no Supabase com apenas duas tabelas (user e senha).
- Front-end em React + Tailwind CSS.
- API em Node.js/TypeScript para comunicação com o front e banco.
- Integração com bot no Telegram, que recebe os produtos de lojas parceiras como Amazon, Shopee e Magazine Luiza.
- Aplicação responsiva e preparada para escalar.

1️⃣ - Rode o comando npm install em cada pasta do projeto (back-end e front-end) separadamente:

cd back-end
npm install

cd ../front-end
npm install
💡 Também é possível rodar ambos juntos com apenas um npm se configurado no package principal.

2️⃣ Configurar variáveis de ambiente
Crie um arquivo .env na raiz do back-end com as informações necessárias (exemplo no .env.example).

SUPABASE_URL=sua_url_aqui
SUPABASE_KEY=sua_chave_aqui
JWT_SECRET=sua_chave_segura
PORT=3000

3️⃣ Criar usuário no banco

Foi criada uma task auxiliar chamada gerarHash.ts que permite incluir um usuário no banco com senha criptografada automaticamente.
Assim, ao efetivar o cadastro, a senha é armazenada de forma segura.
