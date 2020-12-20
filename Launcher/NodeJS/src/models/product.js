const mongoose = require('mongoose'); //orm mongoose
//mongoosePaginate = paginação dos dados do db
//npm install mongoose-paginate
const mongoosePaginate = require('mongoose-paginate');

//novo objeto, produto e suas propriedades, informando que ele é um schema
const PorductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PorductSchema.plugin(mongoosePaginate);

//aqui eu digo para o mongoose que o product é um schema do db
mongoose.model("Product", PorductSchema);