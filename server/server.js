const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const {Expenses} = require('./models/expenses');
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/expenses_list', (req,res) => {
  Expenses.find({
  }).then((expenses) => {
    res.send({
      expenses
    })
  },(e) => {
    res.status(400).send(e);
  })
});

app.post('/expenses_add', (req,res) => {
  const expense = new Expenses(req.body);
  expense.save().then(() => {
      res.send(expense);
  }).catch((e) => {
    res.send(e);
  })
});

app.post('/expenses_remove', (req,res) => {
    Expenses.findOneAndDelete({id : req.body.id}).then((expense) => {
      res.send(expense);
    }).catch((e) => {
      res.status(400).send;
    })
});

app.post('/expenses_edit', (req,res) => {
  Expenses.findOneAndUpdate({id : req.body.id}, {$set:req.body.new}, {new: true}).then((expense) => {
    res.send(expense);
  }).catch((e) => {
    res.status(400).send;
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () =>{
  console.log('Server is up!');
});
