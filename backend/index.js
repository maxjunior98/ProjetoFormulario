const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 3333

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({Welcome: 'API DOS CEPS'})
})

app.get('/getcep/:cep', async (request, response) =>{
    const cep = request.params.cep
    console.log(cep)
    response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(function(response){
        return response;
    })
    console.log(response.data)
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})