"use strict";

module.exports = function (sequelize, DataTypes) {
  var Parking_User = sequelize.define("parking_user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parking_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    exit_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    extra_fee: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: "parkings_users",
    classMethods: {},
    sequelize: sequelize,
    modelName: "ParkingUserModel"
  });
  return Parking_User;
};