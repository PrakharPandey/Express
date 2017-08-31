let mongoose = require('mongoose')
let Schema = mongoose.Schema


let employee = new Schema({
id: Number,
name: String
})

module.exports = mongoose.model('Employee', employee)