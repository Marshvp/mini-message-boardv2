const { Router } = require('express');
const formatDate = require('../scripts/formatDate');

const indexRouter = Router()


const messages = [
    { 
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    }, 
    {
        text: "Hello World",
        user: "Charles",
        added: new Date()
    }
];

const title = 'Mini Message Board';



indexRouter.get('/', (req, res) => {
    messages.forEach((message) => {
        message.formattedDate = formatDate(message.added)
    })
    res.render('index', { title: title, messages: messages})
})

indexRouter.get('/new', (req, res) => {
     res.redirect('/')
})

indexRouter.post('/new', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const addMessage = req.body.addMessage;
    if (!username || !addMessage) {
        return res.redirect('/');
    }
    messages.push({ text: req.body.addMessage, user: req.body.username, added: new Date()})
    return res.redirect('/');
})

indexRouter.get('/:username', (req, res) => {
    userMessages = []
    username = req.params.username
    
    messages.forEach((message) => {
        if(message.user === username)
            userMessages.push(message)
    })

    //todo
    res.render('details', { username: username, messages: userMessages})
})

module.exports = indexRouter