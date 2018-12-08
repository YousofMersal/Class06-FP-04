//Seperate settings for db to be used multiple places easier
const settings = process.env.CLEARDB_DATABASE_URL || {
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD_SECRET,
  database: process.env.DATABASE_NAME
}

module.exports = { settings }
