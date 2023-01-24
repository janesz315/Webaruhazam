// console.log("今日は!");
const express = require('express')
const app = express()
let port = 3000
const fs = require("fs")

const dataFile = "./data/termekek.json";

//Honnan és hová
app.get('/products', function (req, res) {
    fs.readFile(dataFile,(error,data) => {
        let products = JSON.parse(data)
        res.send(products)
    })
})

app.get('/products/:id', function (req, res) {
    const id = req.params.id
    console.log(id)
    fs.readFile(dataFile,(error,data) => {
        let products = JSON.parse(data)
        const productById = products.find(product => product.id === id)
        if (!productById) {
            let message = {
                error: `id: ${id} が 見つかりません`
            }
            res.status(404)
            res.send(message)
            return
        }
        res.send(productById)
    })
})

app.listen(port, ()=>{
    console.log(`Express 鯖 良い 端子:${port}`)
})