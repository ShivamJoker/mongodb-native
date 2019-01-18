const expect = requre('expect');
const request = require('supertest')

const {
    app
} = require('./../server')
const {
    Todo
} = require('./models/todo')

describe('POST /todos', ()=>{
    it('should create a new todo', (done) =>{
        const text = 'Test todo text'
    })
})