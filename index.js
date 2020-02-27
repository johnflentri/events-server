const express = require("express")
const app = express()
const eventRouter = require("./event/router")
const cors = require("cors")
const bodyParser = require("body-parser")
const parserMiddleware = bodyParser.json()

const corsMiddleware = cors()
// Middleware
app.use(corsMiddleware)
app.use(parserMiddleware)

// Routers
app.use(eventRouter)

// app.get("/", (req, res) => {
//   res.send("HELLOOOOO")
// })

const port = 4000

app.listen(port, () => console.log("Listening on port ", port))