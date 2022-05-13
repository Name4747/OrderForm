const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dbKey = 'AccountEndpoint=https://beadsrhapsody-db.documents.azure.com:443/;AccountKey=advQDMy1kmJYGsqQvyCuI08qhOIEG0lo0l9Ps6OfGi6ZYqr0yWdkvDygtvgMf28Ndb1yuffglOYq1jp5yU63Zg==;'
const port = process.env.PORT || 8080
const path = require('path')
const client = new CosmosClient(dbKey)
const db = client.database('beads-db')
const container = db.container('test')

app.use(express.json())
app.use(express.static(path.join(__dirname,'/client/build')))

/*app.post('/order', (req, res) => {
    const {type,style,mat1,mat2,mat3,email,fullName,phone} = req.body
    //console.log(type,style,mat1,mat2,mat3,email,fullName,phone)
    const sql = db.prepare('INSERT INTO orders (type,style,material1,material2,material3,email,fullName,phone) VALUES (?,?,?,?,?,?,?,?)')
    const result = sql.run(type,style,mat1,mat2,mat3,email,fullName,phone)
})*/

app.post('/order', (req, res) => {
    const {type,style,mat1,mat2,mat3,email,fullName,phone} = req.body
    const data = {
        id: Date.now().toString(),
        type,
        style,
        mat1,
        mat2,
        mat3,
        email,
        fullName,
        phone
        //same as phone: phone
    }
    container.items.create(data)
})

let secretPassword = "password"
let answer;

app.post('/answer', (req,res) => {
    const {par} = req.body
    answer = par
})

app.get('/login',async (req,res) => {
    if(answer == secretPassword) {
        const { resources: items } = await container.items
            .query("SELECT * FROM c")
            .fetchAll();
        res.json(items)
    }
    else {
        res.json(null)
    }
})

app.listen(port, () => {
    console.info("server started")
})
