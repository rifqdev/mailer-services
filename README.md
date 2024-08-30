<h1 align="center">mailer-services</h1>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This Node.js API project is designed to smooth the email sending process in your application. By leveraging Nodemailer and Google SMTP, this API allows you to easily send emails automatically. You just need to send data like the recipient's email address, subject, and message body, and the API will handle the rest.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

Clone this project

```
git clone https://github.com/rifqdev/mailer-services.git
```

Rename .env.example to .env and
Please configure your Google SMTP

```
GMAIL_APP_PASS=
GMAIL_USER=
```

Your services port by default is 3000

```
PORT=
```

You can add multiple uri frontend e.g [uri1, uri2]

```
FRONTEND_URL=[]
```

Mail destination is your email

```
MAIL_DESTINATION=
```

### Installing

A step by step to running local environment

Install dependencies

```
npm install
```

Make sure the .env file is correct and then to run this server

```
npm run dev
```

## 🎈 Usage <a name="usage"></a>

To use it, if you are in a local environment, open Postman or another similar application:

```
http://localhost:3000/api/send-email/v1
Method POST
Request Body:

  email: emailsender@gmail.com
  message: message from sender

```

If success will return like this

```
{
    "success": true,
    "message": "email has sended",
    "data": null,
    "code": 200
}
```

## 🚀 Deployment <a name = "deployment"></a>

I have deployed this project to Vercel, that's why you will see the vercel.json file, if you want to also deploy to Vercel then you should be able to deploy directly and don't need to change the vercel.json file.
And remember, don't forget to set the environment variables in Vercel

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@rifqdev](https://github.com/rifqdev) - Idea & Initial work
