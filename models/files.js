module.exports = function(sequelize, DataTypes) {
  var Files = sequelize.define("Files", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Files.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Files.hasMany(models.Url, {
      onDelete: "cascade"
    });
  };

  return Files;
};
