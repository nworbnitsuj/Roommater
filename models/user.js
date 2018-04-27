var mongoose = require('mongoose'),
  Schema = user.Schema;

var UserSchema = new Schema({
  first: String,
  last: String,
  email: String,
  password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
