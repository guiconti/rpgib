module.exports = (sequelize, DataTypes) => {
  let TerritoryAdjacent = sequelize.define('territory_adjacent', {
    distance: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });
  return TerritoryAdjacent;
};
