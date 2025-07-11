import express from 'express'
const expressApp = express()

expressApp.get('/ping', (req, res) => {
  res.send('pong')
})

expressApp.listen(3000, () => {
  console.log(`server started on http://localhost:3000`)
})
