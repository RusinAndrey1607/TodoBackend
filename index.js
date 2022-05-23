const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./routes/todo.router.js");
const pool = require("./db.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());
app.use("/todos", todoRouter);

const start = async() => {
    try {
        await pool.connect();
        console.log("Connect to database");
        app.listen(port, () => {
            console.log(
                `⚡️[server]: Server is running at https://localhost:${port}`
            );
        });
    } catch (error) {}
};

start();