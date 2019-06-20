const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'undefined'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'undefined'
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'undefined'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    defaultValue: 'undefined'
  }
});

const Users = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'undefined'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'undefined',
    validate: {
      isEmail: true
    }
  }
});

module.exports = { db, Page, Users };
