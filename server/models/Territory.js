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
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });
  
  Territory.associate = (models) => {
    Territory.belongsToMany(models.territory, {
      through: models.territory_adjacent,
      as: 'adjacent',
      foreignKey: 'originId',
      otherKey: 'adjacentId'
    });
    Territory.belongsToMany(models.territory, {
      through: models.territory_adjacent,
      as: 'adjacency',
      foreignKey: 'adjacentId',
      otherKey: 'originId'
    });
  };

  return Territory;
};