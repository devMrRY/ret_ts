const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)

server.get('/health', (req, res) => {
    res.jsonp("server is running")
})
   
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
if (req.method === 'POST') {
    req.body.createdAt = Date.now()
}
// Continue to JSON Server router
next()
})

server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})