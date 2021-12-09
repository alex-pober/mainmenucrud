'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
  };
  return Menu;
};
