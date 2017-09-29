module.exports = (sequelize, DataTypes) => {
  let Character = sequelize.define('character', {
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    agility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    vitality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    luck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });

  Character.associate = (models) => {
    Character.belongsTo(models.territory)
  };

  return Character;
};
