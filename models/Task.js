const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required :[true,'Musr provide the name'],
        trim:true,
        maxlength : [50,'Name can not be more than 50 characters']
    },
    completed : {
        type :Boolean,
        default :false
    }
})

module.exports = mongoose.model('Todo',TaskSchema,'Todo')