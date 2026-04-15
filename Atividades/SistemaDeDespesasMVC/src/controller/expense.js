const fs = require("fs");
const path = require("path");
const Expense = require("../model/expense");

const filePath = path.join(__dirname, "../data/expenses.json");

//Ler
function readExpenses() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

//Salvar
function saveExpenses(expenses) {
    fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2));
}

//Gerar ID
function generateID(expenses) {
    if (expenses.length === 0) return 1;

    const maxID = Math.max(...expenses.map(e => e.id));
    return maxID + 1;
}

//Cadastrar Despesas
exports.createExpense = (req, res) => {
    const { title, amount, category, date, description } = req.body;

    if (!title) return res.status(400).json({ error: "O título é obrigatório" });
    if (amount <= 0) return res.status(400).json({ error: "O valor deve ser maior que 0" });

    const today = new Date();
    if (new Date(date) > today)
        return res.status(400).json({ error: "A data não pode ser no futuro." });

    const expenses = readExpenses();

    const newExpense = new Expense ({
        id: generateID(expenses),
        title,
        amount,
        category,
        date,
        description,
        createdAt: new Date()
    });

    expenses.push(newExpense);
    saveExpenses(expenses);

    res.status(201).json(newExpense);
};

//Get All
exports.getAllExpenses = (req, res) => {
    let expenses = readExpenses();
    const { category, date } = req.query;

    if (category) expenses = expenses.filter(e => e.category === category);
    if (date) expenses = expenses.filter(e => e.date === date);

    res.json(expenses);
}

//Get por ID
exports.getExpensesById = (req, res) => {
    const expenses = readExpenses();
    const expense = expenses.find(e => e.id === Number(req.params.id));

    if (!expense) return res.status(404).json({ error: "Despesa não encontrada" });

    res.json(expense);
}

//Atualizar despesas
exports.updateExpense = (req, res) => {
    const expenses = readExpenses();
    const index = expenses.findIndex(e => e.id === Number(req.params.id));

    if (index === -1)
        return res.status(404).json({ error: "Despesa não encontrada" });

    const updated = { ...expenses[index], ...req.body };

    if (updated.amount && updated.amount <= 0)
        return res.status(400).json({ error: "O valor deve ser maior que 0" });

    expenses[index] = updated;
    saveExpenses(expenses);

    res.json(updated);
}

//Deletar Despesas
exports.deleteExpense = (req, res) => {
    let expenses = readExpenses();
    const exists = expenses.some(e => e.id === Number(req.params.id));

    if (!exists)
        return res.status(404).json({ error: "Despesa não encontrada" });

    expenses = expenses.filter(e => e.id !== Number(req.params.id));
    saveExpenses(expenses);

    res.json({ message: "Excluído com sucesso" });
}

//Ver Soma de todas as Despesas juntas
exports.getTotal = (req, res) => {
    const expenses = readExpenses();
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    res.json({ total });
}

//Ver total de cada despesa
exports.getCategory = (req, res) => {
    const expenses = readExpenses();
    const result = {};

    expenses.forEach(e => {
        if (!result[e.category]) result[e.category] = 0;
        result[e.category] += e.amount;
    });

    res.json(result);
}

