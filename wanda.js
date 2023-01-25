// console.log("今日は!");
const express = require('express')
const app = express()
let port = 3000
const fs = require("fs")
const uniquid= require("uniqid")

const dataFile = "./data/termekek.json";

//Middleware
app.use(express.json())

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

app.post('/products', function (req, res) {
    const body = req.body
    // res.send(body)

    const newProduct = {
        id: uniquid(),
        name: body.name,
        quantity: body.quantity,
        price: body.price,
        type: body.type
    }
    fs.readFile(dataFile,(error,data) => {
        //Objektum lista JSON-ból
        let products = JSON.parse(data)
        products.push(newProduct)
        //JSON objektumlistából
        //JSONに変える!
        products = JSON.stringify(products)
        fs.writeFile(dataFile, products,(error) => {
            res.send(newProduct)

        })
    })
})


app.delete('/products/:id', function (req, res) {
    const id = req.params.id
    
    fs.readFile(dataFile,(error,data) => {
        let products = JSON.parse(data)
        const productIndexById = products.findIndex(product => product.id === id)
        if (productIndexById === -1) {
            let message = {
                error: `id: ${id} が 見つかりません`
            }
            res.status(404)
            res.send(message)
            return
            
        }
        //抹消
        products.splice(productIndexById,1)
        //書き換える
        products = JSON.stringify(products)
        fs.writeFile(dataFile, products, (error) => {
            res.send({ id: id })
        })
        // res.send(productById)
    })
})

app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(dataFile,(error, data)=>{
        const products = JSON.parse(data);
        const productIndexById = products.findIndex(product => product.id == id);
        if (productIndexById === -1) {
            let message = {
                error: `id: ${id} が 見つかりません`
            }
            res.status(404);
            res.send(message);
            // res.send(JSON.stringify(message));
            return;
        }
        const updatedProduct = {
            id: id,
            name: (req.body.name),
            quantity: Number(req.body.quantity),
            price: Number(req.body.price),
            type: (req.body.type),
          };
        products[productIndexById] = updatedProduct;
        fs.writeFile(dataFile, JSON.stringify(products), (error, data)=>{
            res.send(updatedProduct);
        });
        // res.send(JSON.stringify(productById));
    });
});

app.listen(port, ()=>{
    console.log(`Express 鯖 良い 端子:${port}`)
})