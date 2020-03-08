const mongoose = require('mongoose');

    const Schema = mongoose.Schema;
    const ContaSchema = Schema({
        nome: { type: String, required: true },
        data: { type: Date, require: true},
        total_receber: { type: Number, require: true},
        status: { type: Boolean, required: true}
        
    });


module.exports = ContaSchema;
 