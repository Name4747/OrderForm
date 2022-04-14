const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dbKey = 'AccountEndpoint=https://beadsrhapsody-db.documents.azure.com:443/;AccountKey=rLCF853XHXgwXZK5uB80r9AEZo4A5OhErtZrzrAzugZwvoSYC72ePnkYywAjk7TGjKtp6z9G7EH2n2LMQapQEg==;'
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

/*app.get('/hello/:name',async (req,res) => {
    const data = {
        id: Date.now().toLocaleString(),
        score: "1",//Math.floor(Math.random * 100),
        name: req.params.name
    }
    container.items.create(data)
        .catch((err) => {console.error(err)})
    const {resources: hellos} = await container.items.query("SELECT * FROM c")
        .fetchAll()
    res.send(JSON.stringify(hellos))
})*/

app.listen(port, () => {
    console.info("server started")
})
