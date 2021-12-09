const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Restaurant } = require('../../db/models');
const { Menu } = require('../../db/models');
const { Item } = require('../../db/models');
const { itemImage } = require('../../db/models');

const router = express.Router();

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const items = await Item.findByPk(req.params.id)
    await items.destroy()
    return res.json(items)
}))

module.exports = router;
