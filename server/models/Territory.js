module.exports = (sequelize, DataTypes) => {
  let Territory = sequelize.define('territory', {
    id: {
      type: DataTypes.UUID, 
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      notEmpty: true
    },
  });
  
  Territory.associate = (models) => {
    Territory.belongsToMany(models.territory, {
      as: 'adjacents',
      foreignKey: 'adjacentId',
      through: models.territory_adjacent
    });
  };

  return Territory;
};
