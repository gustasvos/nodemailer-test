# Nodemailer

**Requisitos: Node, npm e Typescript.** 

Antes de rodar pela primeira vez, instale os módulos:

```bash
> npm i
> npm i @types/node --save-dev

```

Criar `.env`  e adicionar:

```bash
GMAIL_USER='seu-email@gmail.com'
GMAIL_APP_PASSWORD='sua-senha-de-app-gmail'
EMAIL_RECEIVER='seu-email-recebedor@provedor.com'
```

Para criar a senha de aplicativo, ative a autenticação de dois fatores e depois acesse https://myaccount.google.com/apppasswords.


Para rodar:

```bash
> npm run build
> npm run dev
```
