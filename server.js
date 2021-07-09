const express = require("express");

const productsPath = require("./server/products/index.get.json");
const bannersPath = require("./server/banners/index.get.json");
const categoriesPath = require("./server/categories/index.get.json");

const cartPath = require("./server/cart/index.get.json");

const app = express();
app.use(express.urlencoded({extended:true}))

app.get("/api/products", (req, res) => {
  res.send(productsPath);
});
app.get("/api/cart", (req, res) => {
  res.send(cartPath);
});
app.post("/api/cart", (req, res) => {
  res.send(req.body);
});

app.get("/api/banners", (req, res) => {
  res.send(bannersPath);
});

app.get("/api/categories", (req, res) => {
  res.json(categoriesPath);
});


const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`listening on port %s...', ${port}`);
});
