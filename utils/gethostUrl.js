module.exports = (req) =>
  req.get('host') === `127.0.0.1:${process.env.port}`
    ? `localhost:3000`
    : req.get('host');
