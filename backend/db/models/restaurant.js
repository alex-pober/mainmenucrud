'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.NUMERIC,
    phoneNumber: DataTypes.NUMERIC
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Restaurant;
};
