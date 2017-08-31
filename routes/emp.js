var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')


let db = 'mongodb://localhost/emp'
mongoose.connect(db)

var emp = require ('../model/empSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))



//Find All Employees
router.get('/find', (req, res) => {

  emp.find((err, emp) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
  
      res.json(emp)
    }
  });
})

router.get('/findById/:id', (req, res) => {
  emp.findOne({id: req.params.id}, (err, emp) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
      res.json(emp)
    }
  });
})

//Insert New Employees
router.post('/add', (req, res) => {
	let empl = new emp()
	empl.id = req.body.id,
	empl.name = req.body.name

	empl.save((err, emp) => {
		if(err)
			res.send('error saving employee')
		else
		{
			res.json(emp)
		}
	})
})

//Find Employee By Id and Update
router.put('/update/:id', (req, res) => {
  emp.update({
  	id: req.params.id
  }, { $set: 
  	{name: req.body.name}}, 
  	{upsert: true},
  	(err, empp) => {
  		if(err)
  			throw err
  		else
  		{
  			res.json(empp)
  		}
  })
})

//Delete Employee By Id
router.delete('/delete/:id', (req, res) => {
  emp.remove({
  	id: req.params.id
  }, (err, empp) => {
  		if(err)
        throw err
  			//
  		else
  		{
  			res.json(empp)
  		}
  })
})

/*// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})*/

/*app.all('/secret', function (req, res, next) {
   console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})*/

/*app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})*/

/*app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })*/

module.exports = router
