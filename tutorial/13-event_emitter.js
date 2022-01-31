const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data revieved from user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
    console.log(`Some other logic here`)
})

customEmitter.emit('response', 'jhon', "10.1.2.3.5.6")