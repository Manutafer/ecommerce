const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const isPalindrome = require("./")
app.use(bodyParser.json())

// app.post('/e-palindromo', function(req,res){
//     // res.sendFile(__dirname + '/teste.html')
//     // console.log(req.body.palavra)
//     const resposta = isPalindrome(req.body.palavra)
//     if(resposta === true){
//         res.send('é palindromo')
//     }else{
//     res.send('não é palindromo')}
// })

const db = require('./db.json')
app.get('/produtos', function (req, res){
    var produtos = db.produtos
    res.json(produtos)
})
app.get('/produtos/:id', function(req, res){
    const _id = req.params.id
    res.send(_id)
})

app.get('/produtos/:id', function(req, res) {
    const _id = req.params.id
    const produtos = db.produtos
    const result = produtos.filter(item => item.id == _id);
    res.send(result)
})

app.listen(5000)