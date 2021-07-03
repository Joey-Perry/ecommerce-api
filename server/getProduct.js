const products = require('../products.json');

module.exports = (req, res, next) => {
    const id = (parseInt(req.params.id, 10) - 1);

    if (products[id]){
        res.status(200).send(products[id])
    } else {
        res.status(500).send(`Item not in list`)
    }
}