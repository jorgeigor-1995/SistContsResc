const mongoose = require('mongoose');
    
    const today = new Date();
    const Schema = mongoose.Schema;
    const ContaSchema = Schema({
        nome: String,
        data: {
            type: Date,
            defaut: today
        },
        total_receber: Number,
        status: { 
            type: Boolean, 
            defaut: true}
        
    });


module.exports = ContaSchema;
 