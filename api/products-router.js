const express = require('express');
const productsService = require('./products-service').getInstance();
const router = express.Router();

router.get('/products', (req, res) => {
	return productsService.fetchProducts(req.query)
		.then(response => {
			res.json(response);
			res.status(200);
		})
});

module.exports = router;