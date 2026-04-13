const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const students = [
{
  id: 1,
  name: "john doe",
  course: "BSIT"
},
{
  id: 2,
  name: "jane doe",
  course: "BSCS"
},
{
  id: 3,
  name: "liam doe",
  course: "BSIT"
}
]
app.get('/api/students',(req, res) => {
  res.json(students)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})