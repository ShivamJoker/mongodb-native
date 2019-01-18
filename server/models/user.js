const {mongoose} = require('../db/mongoose')


// user model
const User = mongoose.model('User',{
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 30,
        trim: true
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 30,
        trim: true
    }
})

const newUser = new User({
    name: 'hippo',
    email: 'fel@laa.com'
})

// newUser.save()
// .then(doc => console.log('User Saved', doc))
// .catch(err=> console.log(err))

module.exports = {User}