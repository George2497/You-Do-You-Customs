const mongoose = require('mongoose')

var shoppingList = new mongoose.Schema({

    name: {
        type: String,
        required: 'This field is required'
    },

    list: {
        type: [{item: String, quantity: Number}],
        required: 'This field is required'
    }

});

mongoose.model('ShoppingList',shoppingList);