const pool = require('./pool')

async function addMessage(username, message) {
    try {
        const result = await pool.query(
            "INSERT INTO messages (username, text) VALUES ($1, $2)", 
            [username, message])
        console.log("message inserted")
        return "Success"
    } catch (error) {
        console.log("Error adding message",error);
    }
}

async function getAllMessages(){  
    try {
       const result = await pool.query(
        "SELECT * FROM messages"
       );
       return result.rows
    } catch (error) {
        console.log("Error getting all message", error);
    } 
}

async function findAllUsersMessages(username) {
    try {
        const result = await pool.query(
            "SELECT * FROM messages WHERE username = $1 ORDER BY created_at DESC",
            [username]
        )
        return result.rows
    } catch (error) {
        console.log("Error finding all of users messages", error);
    }
}

async function deleteMessage(id) {
    try {
        await pool.query(
            "DELETE FROM messages WHERE id = ($1)", [id]
        )
        return "Success in deleting message"
    } catch (error) {
        console.log("Error in deleting message", error);
    }
}



module.exports = {
    addMessage,
    getAllMessages,
    findAllUsersMessages,
    deleteMessage
}