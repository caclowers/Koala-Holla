const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let koalaSchema = new Schema ({
    name: {type: String, required: true},
    gender: {type: String},
    age: {type: Number},
    ready_to_transfer: {type: Boolean, default: false},
    notes: {type: String}
});

module.exports = mongoose.model('Koala', koalaSchema);