const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Restaurant } = require('../../db/models');
const { Menu } = require('../../db/models');
const { Item } = require('../../db/models');
const { itemImage } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const items = await Item.findByPk(req.params.id)
    return res.json(items)
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const {category, title, description, price} = req.body;
    const item = await Item.findByPk(req.params.id)

    item.update({
        category,
        title,
        description,
        price
    })

    return res.json(item)
}))

module.exports = router;
