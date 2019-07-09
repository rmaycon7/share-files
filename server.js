const express = require('express')

const app = express()

let options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function(res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
}

// app.use(express.static('public', options))
app.use(express.static('dist', options))

let router = express.Router([options])
app.use(router)
// app.use(express.static('dist', {
// 	// index: false,
// 	redirect: false
// }))
// app.all('*', (req, res, next) => {
// 	res.redirect('/')
// })
app.listen(8080, (error) => {
	console.log(`Running in http://localhost:8080`)
})