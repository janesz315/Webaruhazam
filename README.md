# json 鯖

## projekt indítása
`npm init -y`

## Telepítendő modulok
## 

szerver: `npm i --save express`  
JSSS védelem. betörés ellen:`npm install sanitize-html `
egyedi azonosító:`npm install uniqid`

## telepítés egyszerre
##
npm i express sanitize-html uniqid

# Express 鯖
- Branch: `01_Express_始め`
```js
const express = require('express')
const app = express()
let port = 3000

app.get('/products', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Express 鯖 良い 端子:${port}`)
});
```

# データ構造
- branch: `02_データ構造`
```json
product = {
    "id":"string",
    "name":"string",
    "quantity":"int",
    "price":"number",
    "type":"string"
}
```
# 良いデータ構造
```json
[
    {
      "id": "apcj6tclbfhqung",
      "name": "Á22",
      "quantity": 24,
      "price": 2500,
      "type": "tejtermék"
    },
    {
      "id": "apcjbuglbfhs62f",
      "name": "Á2",
      "quantity": 24,
      "price": 2500,
      "type": "tejtermék"
    },
    {
      "id": "apcj1q8lbfnah5m",
      "name": "Á1",
      "quantity": 24,
      "price": 2500,
      "type": "tejtermék"
    }
  ]
```

# 3 Get, ファイルシステム
- branch: '03_Get_ファイルシステム`
```rest
### Get products
GET http://localhost:3000/products/
### get product by id
GET http://localhost:3000/products/apcjbuglbfhs62f
```

# lecția de astăzi
 - Există, de asemenea, lecții interesante și plictisitoare
 - Loretta nu are creier. Ea este o curvă
# CDN server