
//Import server.js
const { app } = require('./server');
//let Heroku pick the port, and when it doesn't use 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});