const express = require("express");
const app = express();
const axios = require("axios");
const dfff = require("dialogflow-fulfillment");
const datetime = require("node-datetime");

let pincode;
const port = process.env.PORT;
let responseData_vaccine;
let data;
let dataSlot_vaccine;

let dt = datetime.create();
let formatted = dt.format("d-m-Y");