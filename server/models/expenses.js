const mongoose = require('mongoose');

const Expenses = mongoose.model('Expenses',{
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    }
});

module.exports = {
    Expenses
};
