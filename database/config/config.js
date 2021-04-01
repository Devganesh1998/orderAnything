module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 6,
      min: 1,
      acquire: 30000,
    }
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 6,
      min: 1,
      acquire: 30000,
    }
  },
};
