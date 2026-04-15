const express = require("express");
const controllers = require("../controller/expense.js");

const router = express.Router();


router.post("/expenses", controllers.createExpense);
router.get("/expenses", controllers.getAllExpenses);
router.get("/expenses/:id", controllers.getExpensesById);
router.put("/expenses/:id", controllers.updateExpense);
router.delete("/expenses/:id", controllers.deleteExpense);

router.get("/expenses/summary/total", controllers.getTotal);
router.get("/expenses/summary/category", controllers.getCategory);


module.exports = router;