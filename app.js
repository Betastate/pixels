const express = require('express');
const path = require('path');
const compression = require('compression')

const app = express();
const PORT = 3000;

app.use(compression())
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.status(200);
    // res.send("Welcome to root URL of Server");
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
); 