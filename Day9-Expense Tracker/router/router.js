let express = require("express");
let Expense = require("../models/expense");
let router = express.Router();

//?http://localhost:5000/expense/create POST

router.post("/expense/create", createExpense);
router.get("/expense/get", getExpense);
router.patch("/expense/edit/:id", (req, res) => res.send("Router connected"));
router.delete("/expense/delete/:id", (req, res) =>
  res.send("Router connected")
);

async function createExpense(req, res) {
  let body = req.body;
  if (body.title === "")
    return res.status(500).json("Empty title cannot be added");
  if (body.amount === 0)
    return res.status(500).json("Empty amount cannot be added");
  if (body.date === "")
    return res.status(500).json("Empty date cannot be added");
  let newExpense = new Expense({
    title: body.title,
    amount: body.amount,
    date: body.date,
  });
  await newExpense.save();
  res.status(201).json("Expense created");
}

async function getExpense(req, res) {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = router;
