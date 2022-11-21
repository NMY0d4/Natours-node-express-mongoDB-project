module.exports = (req) =>
  req.get('host') === `127.0.0.1:${process.env.PORT}`
    ? `localhost:3000`
    : req.get('host');
