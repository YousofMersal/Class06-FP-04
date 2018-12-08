//Seperate settings for db to be used multiple places easier
module.exports.settings = {
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD_SECRET,
  database: process.env.DATABASE_NAME
}


