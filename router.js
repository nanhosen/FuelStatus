module.exports = app => {
	app.get('/', function(req,res) {
		res.send('Hello World!')
	})

	app.listen(4000, console.log('Working'))
}