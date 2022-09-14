const express = require('express');
const app = express();
const port = 3002;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://user:password@reactlogin.2wypo5c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("Todo").collection("todolist");

app.listen(port, _ => {
  console.log(`The server has started on port number ${port}`)
});

app.get("/addtodo", (req, res) => {
  const todoItem = req.query.item;
  if(todoItem == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
    return;
  }
  collection.insertOne({
    item: todoItem,
    isDone: false,
    deleted: false 
  });
  res.json({
    status: "Successful"
  });
});

app.get("/list", (_, res) => {
  (async _ => {
    const data = await collection.find().toArray();
    res.json({
      status: "Successful",
      data: data
    });
  })();
});

app.get("/update", (req, res) => {
  const id = req.query.id;
  const todoItem = req.query.item;
  if(id == undefined || todoItem == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
    return;
  }
  
  collection.updateOne({
    _id: ObjectId(id)
  }, {
    $set: {
      item: todoItem
    },
  });
  res.json({
    status: "Successful"
  });
})

app.get("/done", (req, res) => {
  const id = req.query.id;
  if(id == undefined) {
    res.status(400).json({
      status: "Unsuccessful" 
    });
  }

  collection.updateOne({
    _id: ObjectId(id)
  }, {
    $set: {
      isDone: true
    }
  });

  res.json({
    status: "Successful"
  });
});

app.get("/delete", (req, res) => {
  const id = req.query.id;
  if(id == undefined) {
    res.status(400).json({
      status: "Unsuccessful"
    });
  }

  collection.deleteOne({
    _id: ObjectId(id)
  });
  res.json({
    status: "Successful"
  });
})