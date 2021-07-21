const http = require("http")
const port = 3000
const hostname = 'localhost'
// 创建http服务器，当有请求进来，该回调会执行，并接收两个对象，一个提供请求的详细信息，一个响应对象，构造返回给客户端的数据
const server = http.createServer((request, response) => {
  console.log(request)
  response.statusCode = 200
  response.setHeader('Content-Type', 'json')
  response.end()
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
