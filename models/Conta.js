const mongoose = require('mongoose');

module.exports = function (express) {
    const Schema = mongoose.Schema;
    const contaSchema = Schema({
        nome: { type: String, required: true },
        data: { type: Date, require: true},
        total_receber: { type: Number, require: true},
        status: { type: Boolean, required: true}
        
    });

    
    return global.db.model('conta', contaSchema);
}; 