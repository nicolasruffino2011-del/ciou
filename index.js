import express from "express"
import path from "path"

const app = express()

app.use(express.static(path.join(process.cwd(), "views")))
app.use("/img", express.static(path.join(process.cwd(), "img")))

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "index.html"))
})

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "dashboard.html"))
})

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log("Servidor iniciado")
})