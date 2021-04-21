const mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: 'This field is required',  
    },

    product: {
        type: String,
        required: 'This field is required',
    },

    rating: {
        type: Number,
        required: 'This field is required',
    },

    comment: {
        type: String,
        required: 'This field is required'
    }

});


mongoose.model('Review',reviewSchema);


