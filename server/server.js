// eslint-disable-next-line @typescript-eslint/no-var-requires
const ws = require('nodejs-websocket')
const POST = 9999

const server = ws.createServer((connect) => {
  connect.on('text', (data) => {
    console.log('received: ' + data)
    connect.sendText(data)
  })

  connect.on('close', () => {
    console.log('connection closed!')
  })

  connect.on('error', () => {
    console.log('connection error!')
  })
})

server.listen(POST, () => {
  console.log('websocket server start success!')
})
