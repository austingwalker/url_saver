module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define("Url", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    }
  });

  // validate: {
  //   isUrl: true
  // }

  Url.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Url.belongsTo(models.Files, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Url;
};
