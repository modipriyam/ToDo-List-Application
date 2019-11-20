var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    type: String,
    type2: String,
    status: String,
   
})

taskSchema.plugin(mongoosePaginate)
const task = mongoose.model('Task', taskSchema)

module.exports = task;