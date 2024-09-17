const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO URI environment variable is not set');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database successfully');
  } catch (error) {
    console.log(`Error in database connection: ${error.message}`);
  }
};

module.exports = dbConnect;
