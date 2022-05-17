const database = require('./database');

module.exports = {
    addOrder: async function (order_time, price, quantity) {
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
    },

        
    exportOrders: async function () {
        const sql = "SELECT order_time, price, quantity FROM orders ORDER BY name ASC;";
    },

    
    editOrders: async function () {
       

     },

    
    deleteOrders: async function () {
        
     },

    
    searchOrders: async function () {
      
     },

     addOrders: async function () {

     }

}
