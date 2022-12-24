const express = require("express");
const server = require("..//Controllers/data");
const server1 = require("../Controllers/data1")
const server2 = require("../Controllers/women")
const server3 = require("../Controllers/kids")

const datarouter = express.Router();
const datarouter1 = express.Router();
const datarouter2 = express.Router();
const datarouter3 = express.Router();

datarouter.route("/products").get(server.apicontroller);
datarouter1.route("/men").get(server1.apicontroller1);
datarouter1.route("/women").get(server2.apicontroller2);
datarouter1.route("/kids").get(server3.apicontroller3);

module.exports = {datarouter,datarouter1,datarouter2,datarouter3};
