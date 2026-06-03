const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Order
router.post("/", protect, async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const order = await Order.create({
      user: req.user,
      items,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Logged In User Orders
router.get("/myorders", protect, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user,
    })
      .populate("user", "name email")
      .populate("items.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;