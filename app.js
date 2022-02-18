// Require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// Setting template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Setting static files
app.use(express.static('public'))

// Routes setting
// -index
app.get('/', (req, res) => {
  res.render('index')
})
// -about
app.get('/about', (req, res) => {
  res.render('about')
})
// -portfolio
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})
// -contact
app.get('/contact', (req, res) => {
  res.render('contact')
})

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})