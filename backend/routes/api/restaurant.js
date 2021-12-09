const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Restaurant } = require('../../db/models');
const { Menu } = require('../../db/models');
const { Item } = require('../../db/models');
const { itemImage } = require('../../db/models');

const router = express.Router();

router.post('/', restoreUser, asyncHandler(async (req, res) => {
    const {
        userId,
        name,
        address,
        city,
        state,
        country,
        zipcode,
        phoneNumber
        } = req.body;
    const restaurant = await Restaurant.create({
        userId,
        name,
        address,
        city,
        state,
        country,
        zipcode,
        phoneNumber
    })

    return res.json({restaurant})
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const items = await Restaurant.findAll(
        {where: {
            userId: req.params.id
            },
        order: ['createdAt']
        }
    )
    return res.json(items)
}))

module.exports = router;
