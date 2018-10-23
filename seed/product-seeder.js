

var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })

var products = [new Product({
    imagePath: 'https://cdn-www.bluestacks.com/bs-images/pubg-bike1.png',
    title: 'Gothic Game1',
    description: 'First game!!',
    price: 10
}), new Product({
    imagePath: 'https://cdn-www.bluestacks.com/bs-images/pubg-bike1.png',
    title: 'Gothic Game2',
    description: 'Second game!!',
    price: 20
}), new Product({
    imagePath: 'https://cdn-www.bluestacks.com/bs-images/pubg-bike1.png',
    title: 'Gothic Game3',
    description: 'Third game!!',
    price: 30
})];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            mongoose.disconnect()
        }
    });
}

