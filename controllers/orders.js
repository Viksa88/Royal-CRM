const database = require('./database');

module.exports = addProduct: async function (order_time, price, quantity) {
        const sql = "INSERT INTO orders(order_time, price, quantity)" +
            " VALUES(?,?,?);";
    },

    ordersList: async function (req, res, next) {
        const sql = "SELECT * FROM orders";

        try {
            const result = await database.query(sql);
            res.send(result[0]);
        } catch (err) {
            console.log(err);
        }
    }
}