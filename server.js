const express = require('express')
const app = new express()
const dburl = 'https://beadsrhapsody-db.documents.azure.com:443/'
const dbkey = 'XlUxEKsJ5b7ceJJ42dnmgX0RJsQrr7INkyRg2ZajdYCiwzcv1L3byQ8TF4IJANmtbT9XxO7n7nfUjdgIrJVWDA=='
//const db = require('better-sqlite3')('orderform.db')
const port = process.env.PORT || 8080
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname,'/client/build')))

app.post('/order', (req, res) => {
    const {type,style,mat1,mat2,mat3,email,fullName,phone} = req.body
    //console.log(type,style,mat1,mat2,mat3,email,fullName,phone)
    const sql = db.prepare('INSERT INTO orders (type,style,material1,material2,material3,email,fullName,phone) VALUES (?,?,?,?,?,?,?,?)')
    const result = sql.run(type,style,mat1,mat2,mat3,email,fullName,phone)
})

app.listen(port, () => {
    console.info("server started")
})