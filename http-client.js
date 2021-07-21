const http = require('http');

// 使用nodejs https 发送请求
const req = http.request({
  hostname: 'localhost',
  port: 3000,
  method: 'GET'
}, (response) => {
  console.log(response)
  response.on('data', (data) => {
    process.stdout.write(data)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()