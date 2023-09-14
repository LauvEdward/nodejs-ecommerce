const mongoose = require('mongoose');
const uri = process.env.DB_LOCAL_URI;
const connectDatabase = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log(`connect with mongo host: ${con.connection.host}`);
    });
};
module.exports = connectDatabase;