const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Restaurant } = require('../../db/models');
const { Menu } = require('../../db/models');
const { Item } = require('../../db/models');
const { itemImage } = require('../../db/models');

const router = express.Router();

router.post('/',restoreUser, asyncHandler(async (req, res) => {
    const {
        restaurantId,
            } = req.body;
    const menu = await Menu.create({
        restaurantId,
    })

    return res.json({menu})
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const items = await Item.findAll(
        {where: {
            menuId: req.params.id
            },
        order: ['createdAt']
        }
    )
    return res.json(items)
}))

module.exports = router;
