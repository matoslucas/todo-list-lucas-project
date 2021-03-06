const mongoose = require('mongoose');

require('dotenv/config');


const connectDB = async () => {
    await mongoose.connect(process.env.DB_CONNECTION,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        },()=> console.log('connected to DB!'));
};

module.exports = connectDB;