import mongoose from "mongoose";


export const DbConnect = async (mongo_url) => {
  try {
    const connect = await mongoose.connect(mongo_url)

    if (connect.connection.readyState === 1) {
      console.log('Successfully connected to MongoDB');
    } else {
      console.log('Connection to MongoDB failed');
    }
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}




