const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema ({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        deault: 'Large'
    },
    toppings: []
});

//create pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

//export the pizza model
module.exports = Pizza;

