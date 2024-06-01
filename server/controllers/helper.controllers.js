const bcrypt = require("bcrypt");

const encryptPasswordFunction = (userEnteredPassword) => {
  try {
    const encryptPassword = bcrypt.hash(userEnteredPassword, 10);
    return encryptPassword;
  } catch (err) {
    console.log("error: in passpowrd hasing ", err);
    return -1;
  }
};

const comparePasswordFunction = (userEnteredPassword, hashedPassword) => {
  try {
    const comparePassword = bcrypt.compare(userEnteredPassword, hashedPassword);
    return comparePassword;
  } catch (err) {
    console.log("error: in passpowrd comparing ", err);
    return -1;
  }
};

module.exports = { encryptPasswordFunction, comparePasswordFunction };
