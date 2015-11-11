module.exports = {
  // secret data can be moved to env variables
  // or a separate config
    secret: 'mysecret',
    root: process.cwd(),
    db_url: 'mongodb://localhost:27017/test',
	templates: 'public'
};
