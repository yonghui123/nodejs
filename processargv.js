const EventEmitter = require('events');
const http = require('http');
// const https = require('https');
// import http from 'http'
const eventEmitter = new EventEmitter();
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
const function2 = () => console.trace()
const function1 = () => function2()
function1()
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
eventEmitter.on('start', number => {
  console.log(`开始 ${number}`)
})

eventEmitter.emit('start', 23)
// const options = {
//   hostname: '',
//   port: 443,
//   path: '/todos',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`状态码: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()
const port = 3000

const server = http.createServer((req, res) => {
  console.log(req)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/json')
  res.end('你好\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`)
})
