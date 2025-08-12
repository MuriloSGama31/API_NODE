import express from 'express'

// objeto da biblioteca
const app = express()

//indica q vai usar o json
app.use(express.json())

//vetor pra guardar antes de ter o banco
const usuarios = []

// rotas
app.get('/cadastro', (req, res) => {
    //res.send('tudo ok com get') //parametro de resposta
    res.status(200).json(usuarios)
}) //rota get, coloca 'como pega ela', funcao call back (requisicao, reposta)

app.post('/cadastro', (req, res) => {
    // console.log(req.body)
    usuarios.push(req.body)
    //res.status(201).send('tudo ok com post')
    res.status(201).json(req.body)
})

// porta local do servidor
app.listen(3000, () => {
    console.log('servidor rodando')
}) //fica de olho na porta, pode trabalhar com 2 parametros porta, call back
