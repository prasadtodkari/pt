const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:password@reactlogin.2wypo5c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("fullstack").collection("users");

app.use(cors({}));
app.use(express.json());


app.get('/', (_, res) => {
    res.json({
        message: "Working"
    })
})

app.post('/add', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;
    if(name == undefined){
        res.status(400).json({
            status: "all fileds are mandatiry..!"
        })
        return;
    }
    collection.insertOne({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
    })
    res.status(200).json({
        status: "User Registration Sucessfull...!!"
    });
})

app.get("/list", (_, res) => {
    (async _ => {
      const data = await collection.find().toArray();
      res.json({
        status: "Successful",
        data: data
      });
    })();
  });

app.listen(port, _ => {
    console.log(`server started on ${port}`);
})