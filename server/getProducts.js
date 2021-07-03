const products = require('../products.json');

module.exports = (req, res, next) => {
    const price = req.query?.price;

    if (price){
        const filteredList = products.filter(product => product.price >= price);
        res.status(200).send(filteredList)
    } else {
        console.log(`Price not found`)
        // res.status(200).json(products)
        res.status(200).send(products)
    }
}