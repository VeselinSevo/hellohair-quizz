if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
} else {
	require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Bootstrap services (Make singletons)
require('./products-service').getInstance({
	url: process.env.URL,
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
});

// Import routes 
const productsRouter = require('./products-router');

app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

app.use('/api', productsRouter);

if (process.env.NODE_ENV === 'production') {
	// Set a static folder
	app.use(express.static('client/build'));

	app.get('*', ( req, res ) => res.sendFile(path.resolve( __dirname, '../', 'client', 'build', 'index.html' )));
}

// Set up a port
const port = process.env.PORT;

app.listen(port, () => console.log( `Server running on port: ${port}` ));
