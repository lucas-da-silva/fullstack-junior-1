# Desafio Técnico - Full Stack Junior

- Autor: Lucas da Silva Nascimento Souza

- [LinkedIn](https://www.linkedin.com/in/lucasdasilvadev/)

- [GitHub](https://github.com/lucas-da-silva)

- Telefone: (96) 99136-0020

- E-mail: lucasdasilvadev1@gmail.com

## Bibliotecas utilizadas

- [Next.js](https://nextjs.org/)
- [React.js](https://pt-br.reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)

## Como rodar o projeto

1. Clone o repositório

```bash
git clone https://github.com/lucas-da-silva/fullstack-junior-1
```

2. Entre na pasta do projeto

```bash
cd fullstack-junior-1
```

3. Instale as dependências

```bash
npm install
```

4. Rode o projeto

```bash
npm run dev
```

## Rotas da API

> Necesário o secret `naranja-labs` no header `Authorization` para acessar as rotas

#### Retornar todos os trabalhos

```http
  GET /api/jobs
```

#### Retornar trabalho pelo ID

```http
  GET /api/jobs/${id}
```

#### Cadastrar trabalho

```http
  POST /api/jobs/submit
```

| Parâmetro | Tipo     |
| :-------- | :------- |
| `name`    | `string` |
| `age`     | `number` |
| `phone`   | `string` |
| `state`   | `string` |
| `city`    | `string` |
