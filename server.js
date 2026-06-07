import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/foodapp")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Food Delivery Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
app.get("/api/foods", (req, res) => {
  res.json([
    { id: 1, name: "Cheese Pizza", price: 299 },
    { id: 2, name: "Chicken Burger", price: 199 }
  ]);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/foodapp");

// Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  items: Array,
  total: Number
});

const Order = mongoose.model("Order", orderSchema);

// Save Order API
app.post("/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send({ message: "Order saved successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});