const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
<<<<<<< HEAD
	index: (req, res) => {
		res.render('index', { products: products });
	},
=======
	  index: (req, res) => {
        res.render('index', { products: products });
	  },
>>>>>>> 1a3cd62b51fe075f971da5af68844522047c0e9d

	// Detail - Detail from one product
	detail: (req, res) => {
		  const id = req.params.id;
      product.find(p => p.id === id);

<<<<<<< HEAD
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
=======
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
	  destroy : (req, res) => {
>>>>>>> 1a3cd62b51fe075f971da5af68844522047c0e9d
        const id = req.body.id;
        let products_new = products.filter(e => e != id);
	  }
};

module.exports = controller;
