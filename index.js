const express = require("express");
const app = express();
require('dotenv').config
const cors = require("cors")
const { MongoClient, ServerApiVersion, LEGAL_TCP_SOCKET_OPTIONS,ObjectId } = require('mongodb');
const port = process.env.Port || 5000;

// middware
app.use(express.json())
app.use(cors())


const uri = "mongodb+srv://Node:n6JVgGYbrZ1VsPFc@cluster0.ga6ydds.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {

    const NewUserCollection = client.db('AddUser').collection('Register');

    app.post('/Register', async (req, res) => {

        const newUser = req.body;
        console.log(newUser);
        const result = await NewUserCollection.insertOne(newUser);
        res.send(result);
       
      });

      app.get('/Register', async (req, res) => {
        const cursor = NewUserCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })
   




 


   
  }
  finally {




  }
}
run().catch(error => console.log(error))



app.get('/', (req, res) => {
  res.send("ToyCar.js")


})





app.listen(port, () => {
  console.log(`Node is running Port${port}`)
})




// user name Node
// user passoword n6JVgGYbrZ1VsPFc