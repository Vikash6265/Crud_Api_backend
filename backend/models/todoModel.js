const mongoose = require('mongoose');

// todo schema me hme id,title,description or isCompleted ki jaruri hota he
// to esme id to khud le lega
// hme title,description,isCompleted dena he

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    isCompleted : {
        type : Boolean,
    }
},
{
    timestamps : true
});

module.exports = mongoose.model("Todo",todoSchema)