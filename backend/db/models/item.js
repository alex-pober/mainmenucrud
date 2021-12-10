'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Menu, {foreignKey: 'menuId'})
  };
  return Item;
};
