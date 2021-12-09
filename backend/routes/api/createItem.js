const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Restaurant } = require('../../db/models');
const { Menu } = require('../../db/models');
const { Item } = require('../../db/models');
const { itemImage } = require('../../db/models');

const router = express.Router();

router.post('/', restoreUser, requireAuth, asyncHandler(async (req, res) => {
    const {
        menuId,
        category,
        title,
        description,
        price
        } = req.body;
    const item = await Item.create({
        menuId,
        category,
        title,
        description,
        price
    })

    return res.json({item})
}))

module.exports = router;
