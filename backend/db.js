const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/todos");

//check database connected or not
connect.then( () => {
    console.log("Database connected Successfully");
})
.catch( (error)=> {
    console.error("Database cannot be connected", error);
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo_info', todoSchema);

module.exports = {
    todo
};
