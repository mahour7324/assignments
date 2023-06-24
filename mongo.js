const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://0.0.0.0:27017";
const dbName = 'assignment_user';
const collectionName = 'users';

async function connect(){
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the MongoDB server');
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
   
  }}


module.exports = connect;