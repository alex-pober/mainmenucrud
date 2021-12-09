'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemImage = sequelize.define('itemImage', {
  }, {});
  itemImage.associate = function(models) {
    itemImage.belongsTo(models.Item, {foreignKey: 'itemId'})
  };
  return itemImage;
};
