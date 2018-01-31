var mongoose = require('mongoose');
var Schema = moongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema - new Schema ({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMoongoose);
module.exports = mongoose.model('User', UserSchema);
