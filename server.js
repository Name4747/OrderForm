const express = require('express')
const app = new express()
const db = require('better-sqlite3')('orderform.db')

app.use(express.static('/client/build'))
app.use(express.json())

app.post('/order', (req, res) => {
    const {type,style,mat1,mat2,mat3,email,fullName,phone} = req.body
    //console.log(type,style,mat1,mat2,mat3,email,fullName,phone)
    const sql = db.prepare('INSERT INTO orders (type,style,material1,material2,material3,email,fullName,phone) VALUES (?,?,?,?,?,?,?,?)')
    const result = sql.run(type,style,mat1,mat2,mat3,email,fullName,phone)
})

app.listen(8080, () => {
    console.info("server started")
})