import express from 'express'
const expressApp = express()

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea 1',
    description: 'Idea 1 description',
  },
  {
    nick: 'cool-idea-nick-2',
    name: 'Idea 2',
    description: 'Idea 2 description',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea 3',
    description: 'Idea 3 description',
  },
  {
    nick: 'cool-idea-nick-4',
    name: 'Idea 4',
    description: 'Idea 4 description',
  },
  {
    nick: 'cool-idea-nick-5',
    name: 'Idea 5',
    description: 'Idea 5 description',
  },
]

expressApp.get('/ping', (req, res) => {
  return res.send({ message: 'pong' })
})

expressApp.get('/ideas', (req, res) => {
  return res.send({ data: ideas })
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
