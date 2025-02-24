exports.up = function(knex) {
  return knex.schema.createTable("users", function(user) {
    user.increments();
    user
      .text("username")
      .notNullable()
      .unique();
    user.text("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
