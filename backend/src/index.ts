import express from 'express'
const expressApp = express()

expressApp.get('/ping', (req, res) => {
  return res.send({ message: 'pong' })
})

try {
  const port = 5000
  expressApp.listen(port, 'localhost', () => {
    console.log(`server started on port: ${port}`)
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}
