const {
    mongoose
} = require('../db/mongoose')


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'hehehe  '

});

// newTodo.save()
//     .then(doc => {
//         console.log('Saved todo', doc);

//     }, e => console.log(e))


module.exports = {Todo}