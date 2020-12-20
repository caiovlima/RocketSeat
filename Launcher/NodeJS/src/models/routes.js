const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

//vai bater lá na index do controller
routes.get("/products", ProductController.index);
//get id
routes.get("/products/:id", ProductController.show);
//vai bater lá no post (store)
routes.post("/products", ProductController.store);
//put para o update
routes.put("/products/:id", ProductController.update);
//delete
routes.delete("/products/:id", ProductController.destroy);



module.exports = routes;
