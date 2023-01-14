const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/users");
const Admin = require("./db/admin");
const Product = require('./db/product')
const JWT = require("jsonwebtoken");
const product = require("./db/product");
const JWTKey = "e-dashboard";
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, resp)=>{
  let result = new User(req.body);
  result = await result.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
})


app.post('/login', async (req, resp)=>{
  if(req.body.email && req.body.password){
    let result = await User.findOne(req.body).select('-password');
    if(result){
      resp.send(result);
    }
    else{
      resp.send('No User Found');
    }
  }else{
    resp.send('No User Found')
  }
})

app.post("/admin", async (req, resp) => {
    if (req.body.email && req.body.password) {
      let admin = await Admin.findOne(req.body).select('-password');
      if (admin) {
        resp.send(admin);
      } else {
        resp.send("No Result Found");
      }
    } else {
      resp.send("no Result Found");
    }
  });

app.post('/addProduct', async (req, resp)=>{
  let result = new Product(req.body);
  result = await result.save();
  resp.send(result);
})

app.get('/productList', async (req, resp) =>{
  let result = await Product.find();
  if(result.length>0){
    resp.send(result);
  }else{
    resp.send({result: 'No Product Found'})
  }
  
})

app.delete('/product/:id', async (req, resp)=>{
  let result = await Product.deleteOne({_id: req.params.id});
  resp.send(result);
})

app.get('/product/:id', async (req, resp)=>{
  let result = await Product.findOne({_id: req.params.id});
  resp.send(result);
})

app.put('/product/:id', async (req, resp) =>{
  let result = await Product.updateOne(
    {_id: req.params.id},
    { $set: req.body }
  );
  resp.send(result);
})

app.get('/user/:id' , async (req, resp) =>{
  let result = await User.findOne({_id: req.params.id});
  resp.send(result);
})

app.put('/user/:id', async (req, resp) =>{
  let result = await User.updateOne(
    {_id: req.params.id},
    {$set: req.body}
  );
  resp.send(result);
})


app.get('/search/:key', async (req, resp)=>{
  let result = await Product.find({
    '$or': [
      {name: {$regex: req.params.key}},
      {company: {$regex: req.params.key}},
      {category: {$regex: req.params.key}}
    ]
  });
  resp.send(result);
})

app.listen(5000);
