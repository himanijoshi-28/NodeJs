const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to JOB tracker API")
})
app.get("/application/:id", (req, res) => {
    res.send(`Welcome to JOB tracker API you id is ${req.params.id} `)
})

// http://localhost:3000/application?status=applied
app.get("/application", (req, res) => {

    const { status } = req.query;
    res.send(`Welcome to JOB tracker API you status is  ${status} `)
})

app.listen(3000, () => console.log("server running on poort 3000"))