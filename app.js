const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

const viewRouter = require('./routes/view');
const generateRouter = require('./routes/generate');

app.use(express.urlencoded({extended: true}));

app.use('/', viewRouter);
app.use(generateRouter);

// const routes = require('./routes');

// const server = http.createServer(routes.handler);



// });

app.listen(3000);
