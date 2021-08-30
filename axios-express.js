// import axios from 'axios' -> {npm}
// const axios = require('axios) -> {CommonJS}
// both methods are valid

//initial setup

const express = require('express');
const app = express(); 
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


//------------------------------------------------------------------------

// GET

//front end 

let config = {
  headers : {key: value}, //additional information between the server and the client (usually used for the jwt)
  method: 'get', // GET
  baserURL: 'baseURL', //the localhost or the heruku link
  url: '/someEndPoint', //the endpoint
  params: {key: value}, //the query string but destructured
}
axios(config).then(x => doSth()).catch(e => handleError());

//back end

app.get('/someEndPoint', handler);

const handler = (req, res) => {
  let {a,b,c} = req.query; // if you need to read the query params
  res.send(sth); // the value to be sent back
}

//------------------------------------------------------------------------

// POST

// front end

let config = {
  method: 'post',
  baserURL: 'baseURL',
  url: '/someEndPoint',
  data: {key: value},
}
axios(config).then(x => doSth()).catch(e => handleError());

app.post('/someEndPoint', handler);

const handler = (req, res) => {
  let {a,b,c} = req.body; // get the value sent through the body of the request defined with "data" in the front end
  //do something 
  res.send(sth);
}

//------------------------------------------------------------------------

// PUT

// front end

let config = {
  method: 'put',
  baserURL: 'baseURL',
  url: `/someEndPoint/${someIdentifier}`, //the put method assumes that you already know the url you are pointing to
  //so using params will not work
  data: {key: value},
}
axios(config).then(x => doSth()).catch(e => handleError());

// back end

app.put('/someEndPoint/:someIdentifier', handler);

const handler = (req, res) => {
  let {identifier} = req.params;
  let {a,b,c} = req.body;
  // do something
  res.send(sth);
}

//------------------------------------------------------------------------

// Delete

// front end

let config = {
  method: 'delete',
  baseURL: 'baseURL',
  url: `/someEndPoint/${someIdentifier}`, //almost the same is the put method
  //it assumes you know the url for the resource
}
axios(config).then(x => doSth()).catch(e => handleError());

app.delete('/someEndPoint/:someIdentifier', handler);

const handler = (req, res) => {
  let {identifier} = req.params;
  // do something - usually deleting some resource
  res.send(sth);
}