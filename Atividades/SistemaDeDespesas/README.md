# Despeas Pessoais API
 
## Descrição
API de gerenciamento de despesas, com o obejetivo de
listar dispesas, separar por categorias e datas.
A aplicação foi desenvolvida utilizando o Node.js como ambiente de execução,
permitindo a criação de aplicações backend em JavaScript.
Para a construção das rotas e gerenciamento das requisições HTTP,
foi utilizado o framework Express.js, que facilita o desenvolvimento de APIs REST de forma simples e organizada.
 
 
## Como executar
Instale as dependências do projeto:
```bash
npm install
```
Inicie o servidor:
```bash
node ./src/app.js
```
 
 
O servidor está rodando em ```http://localhost:3000```
 
## Rotas
 
# POST /expenses
**Payload**
```json
{
    "title": "Mecanico",
    "amount": 450,
    "category": "Automovel",
    "date": "2026-03-24",
    "description": "Revisão"
}
```
 
**Resposta(Exemplo)**
```json
{
    "id": 1,
    "title": "Mecanico",
    "amount": 450,
    "category": "Automovel",
    "date": "2026-03-24",
    "description": "Revisão",
    "createdAt": "2026-03-24T22:50:47.471Z"
}
```
 
# GET /expenses
 
**Resposta(Exemplo)**
```json
{
    {
    "id": 1,
    "title": "Mecanico",
    "amount": 450,
    "category": "Automovel",
    "date": "2026-03-24",
    "description": "Revisão",
    "createdAt": "2026-03-24T22:50:47.471Z"
  },
  {
    "id": 2,
    "title": "Posto de Gasolina",
    "amount": 90,
    "category": "Automovel",
    "date": "2026-03-03",
    "description": "Abastecimento",
    "createdAt": "2026-03-24T22:54:25.944Z"
  },
  {
    "id": 3,
    "title": "Supermercado",
    "amount": 230,
    "category": "Alimentacao",
    "date": "2026-03-20",
    "description": "Compra do mês",
    "createdAt": "2026-03-24T23:10:00.000Z"
  },
  {
    "id": 4,
    "title": "Cinema",
    "amount": 50,
    "category": "Lazer",
    "date": "2026-03-18",
    "description": "Filme com amigos",
    "createdAt": "2026-03-24T23:12:00.000Z"
  },
}
```
 
# GET /expenses/:id (2)
**Resposta(Exemplo)**
```json
{
    "id": 2,
    "title": "Posto de Gasolina",
    "amount": 90,
    "category": "Automovel",
    "date": "2026-03-03",
    "description": "Abastecimento",
    "createdAt": "2026-03-24T22:54:25.944Z"
}
```
 
 
 
# PUT /expenses/:id (3)
**Payload**
```json
{
    "amount": 180,
    "date": "2026-03-17"
}
```
**Resposta(Exemplo)**
```json
{
    "id": 3,
    "title": "Supermercado",
    "amount": 180,
    "category": "Alimentacao",
    "date": "2026-03-17",
    "description": "Compra do mês",
    "createdAt": "2026-03-24T23:10:00.000Z"
}
```
 
# GET /expenses/summary/total
**Resposta(Exemplo)**
```json
{"total":1244}
```
 
# GET /expenses/summary/category
**Resposta(Exemplo)**
```json
  {
    "Automovel": 540,
    "Alimentacao": 350,
    "Lazer": 80,
    "Transporte": 35,
    "Contas": 99,
    "Saude": 140
  }
```
 
# DELETE /expenses/:id
