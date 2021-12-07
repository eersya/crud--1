const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	  index: (req, res) => {
        res.render('index', { products: products });
	  },
	// Detail - Detail from one product
	detail: (req, res) => {
		  const id = req.params.id;
      product.find(p => p.id === id);
	},
	// Update - Form to edit
	edit: (req, res) => {
		let productId = req.params.id;
		res.send(productId);
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

      res.render('detail', { product: product });
	},

	  // Create - Form to create
	  create: (req, res) => {
		    // Do the magic
	  },
	  
	  // Create -  Method to store
	  store: (req, res) => {
		    
	  },

	  // Update - Form to edit
	  edit: (req, res) => {
		    // Do the magic
	  },
	  // Update - Method to update
	  update: (req, res) => {
		    // Do the magic
	  },
	  // Delete - Delete one product from DB
	  destroy: (req, res) => {
        const id = req.body.id;
        let products_new = products.filter(e => e != id);
	  },
};

module.exports = controller;
