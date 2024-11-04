const db = require('../database/queries')
const formatDate = require('../scripts/formatDate');
const title = "Mini Message Board"
// const messages = [
//     { 
//         text: "Hi there!",
//         user: "Amando",
//         added: new Date()
//     }, 
//     {
//         text: "Hello World",
//         user: "Charles",
//         added: new Date()
//     }
// ];

exports.indexMainPage = async (req, res) => {
    const result = await db.getAllMessages()
    result.forEach((message) => {
        message.formattedDate = formatDate(message.created_at)
    })
    // console.log("Main Page Result",  result);
    
    res.render('index', { title: title, messages: result });
}

exports.indexNewGet = (req, res) => {
    res.redirect('/');
}

exports.indexNewPost = async (req, res) => {
    // console.log(req.body);
    const username = req.body.username;
    const addMessage = req.body.addMessage;
    if (!username || !addMessage) {
        return res.redirect('/');
    }
    // messages.push({ text: req.body.addMessage, user: req.body.username, added: new Date()})
    const result = await db.addMessage(username, addMessage)
    console.log(result);
    
    return res.redirect('/');
}

exports.usernameGet = async (req, res) => {
    userMessages = []
    username = req.params.username
    
    // messages.forEach((message) => {
    //     if(message.user === username)
    //         userMessages.push(message)
    // })
    const result = await db.findAllUsersMessages(username)
    // console.log(result);
    
    result.forEach(message => message.formattedDate = formatDate(message.created_at))
    //todo
    res.render('details', { username: username, messages: result })
}

exports.deleteMessage = async (req, res) => {
    const messageId = req.params.id
    const result = await db.deleteMessage(messageId)
    console.log(result);
    res.redirect('/')
}