# Despeas Pessoais API

## Descrição
API de gerenciamento de despesas, com o obejetivo de 
listar dispesas, separar por categorias e datas.
A aplicação foi desenvolvida utilizando o Node.js como ambiente de execução,
 permitindo a criação de aplicações backend em JavaScript.
Para a construção das rotas e gerenciamento das requisições HTTP,
 foi utilizado o framework Express.js, que facilita o desenvolvimento de APIs REST de forma simples e organizada.


## Como executar
npm install
npm start

Servidor Rodando em : http//localhost:3000

## Rotas

# GET /expenses

# GET /expenses/:id

# POST /expenses
```json
{
    "title": "Mecanico",
    "amount": 450,
    "category": "Automovel",
    "date": "2026-03-24",
    "description": "Revisão"
}
```

# PUT /expenses/:id
{
    "amount": 150,
    "date": "2026-03-21"
}


# DELETE /expenses/:id

# GET /expenses/summary/total

# GET /expenses/summary/category
