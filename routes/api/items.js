const express = require('express');

const { router } = express.router;

// Item Modes
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    // sort in descending order
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

module.exports = router;
