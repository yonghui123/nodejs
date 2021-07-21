const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

// 事件触发器系统，可以定义和触发事件

// 该对象提供了注册（on）和触发(emit)事件

eventEmitter.on('start', () => {
  console.log('start')
})

eventEmitter.emit('start')