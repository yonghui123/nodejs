const fs = require('fs')
const path = require('path')
fs.open('./test.txt', 'r', (err, fd) => {
  console.log(fd)
})
fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.isDirectory())
  //可以访问 `stats` 中的文件属性
})
const notes = '/users/joe/notes.txt'

console.log(path.dirname(notes)) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt
console.log(path.resolve(''))
console.log(path.resolve('tmp', 'joe.txt'))

fs.readFile('./test.txst', 'utf8', (error, data)=> {
  if(error) {
    // console.error('出错', error);
    console.log(new Error(error))
    let errmsg = error.toString() + ' '+ new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() + '\n'
    fs.appendFile('./error.log', errmsg, err => {
      if (err) {
        console.error(err)
        return
      }
      //文件写入成功。
    })
    return 
  }
  console.log(data)
})
const folderName = './test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}