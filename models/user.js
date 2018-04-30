var mongoose = require('mongoose'),
  Schema = user.Schema;

var UserSchema = new Schema({
  first: String,
  last: String,
  email: String,
  password: String,
  answer1: Number,
  answer2: Number,
  answer3: Number,
  answer4: Number,
  answer5: Number,
  answer6: Boolean,
  answer7: Boolean,
  answer8: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
