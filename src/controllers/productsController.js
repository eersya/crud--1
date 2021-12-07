const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Suma los ids para encontrar un id que esté disponible
function findId(ps) {
    let id = 0;
    ps.forEach( function(p) {
        id = id + p.id;
    });
    return id;
}

const controller = {
	// Root - Show all products
	  index: (req, res) => {
        res.render('index', { products: products });
	  },
	// Detail - Detail from one product
	detail: (req, res) => {
		  const id = req.params.id;
      product = products.find(p => p.id == id);

      // verificar si existe el producto
      if (product != null)
          res.render('detail', { product: product });
      else
          console.error('No existe este producto');
	},

	  // Create - Form to create
	  create: (req, res) => {
        res.render('product-create-form');
	  },
	  
	  // Create -  Method to store
	  store: (req, res) => {
		    const name = req.body.name;
        const price = req.body.price;
        const discount = req.body.discount;
        const category = req.body.category;
        const description = req.body.description;

        const newProduct = {
            id: findId(products),
            name: name,
            description: description,
            price: price,
            discount: price,
            image: "",
            category: category
        };

        // Escribiendo el nuevo producto
        fs.writeFile(
            productsFilePath,
            JSON.stringify(products.push(newProduct)),
            function(err) {
                if (err)
                    throw(err);
            });

        controller.index(req, res);
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
	  destroy: (req, res) => {
        const id = req.body.id;
        let products_new = products.filter(e => e != id);
	  },
};

module.exports = controller;
