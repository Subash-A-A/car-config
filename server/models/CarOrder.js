const mongoose = require("mongoose");

const carOrderTemplate = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  orderNo: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  bodyColor: {
    type: String,
    required: true,
  },
  tireColor: {
    type: String,
    required: true,
  },
  rimColor: {
    type: String,
    required: true,
  },
  lineColor: {
    type: String,
  },
});

module.exports = mongoose.model(
  "orderDetails",
  carOrderTemplate,
  "orderDetails"
);
