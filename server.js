/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')

const app = express();

// Don't put anything in /pub that you don't want the public to have access to!
app.use(express.static(__dirname + '/pub'))


app.get('/', (req, res) => {
	//sending some HTML
	res.sendFile(__dirname + "/pub/examples.html");
})

// Error codes
app.get('/problem', (req, res) => {
	res.status(500).send('There was a problem on the server')
})

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  

