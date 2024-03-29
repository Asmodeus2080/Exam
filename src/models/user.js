const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      // validator: [isEmail, 'Please enter a valid email'],
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: [5, 'Minimum password length is 5 characters'],
    },
  },
  { timestamps: true }
);

// firing a function before saving a document
userSchema.pre('save', function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(8);
  const encryptPassword = bcrypt.hashSync(user.password, salt);
  user.password = encryptPassword;
  next();
});

module.exports = mongoose.model('User', userSchema);
