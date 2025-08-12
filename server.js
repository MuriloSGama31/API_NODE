import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

// rotas
app.get('/cadastro', (req, res) => {
    res.status(200).json(usuarios)
})
app.post('/cadastro', (req, res) => {
    usuarios.push(req.body)
    res.status(201).json(req.body)
})

app.listen(3000, () => {
    console.log('servidor rodando')
})
