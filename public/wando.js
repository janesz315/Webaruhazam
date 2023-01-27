console.log("frontend: Salut");
const url = "http://localhost:3000/products/"

async function getProducts() {
    let response = await fetch(url)
    // fetch(url)
    let data = await response.json()
    console.log(data)
    
}
getProducts()
async function postProducts(){
    let body = {
        name: "Á31",
        quantity: 2221,
        price: 25000,
        type: "金物"
      }
    let response = await fetch(url, {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: body,
        Cache: 'default'
      })
}