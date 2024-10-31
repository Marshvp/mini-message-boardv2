const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')
const path = require('node:path');
const assetPath = path.join(__dirname, "public");

const PORT = 3005;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetPath))
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log('Listening on 3005')
})