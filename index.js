const express = require('express');
const path = require('path');
const env = require('dotenv');

const app = express();

env.config();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (request, response) => {
		response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

const port = process.env.PORT;

app.listen(port, () => {
    console.log('listening on port', port)
})