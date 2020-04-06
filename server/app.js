const Express = require('express')
const app = Express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')

app.use(Express.json())
app.use(cors())
app.use(Express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
    console.log('Listening port : ', port)
})