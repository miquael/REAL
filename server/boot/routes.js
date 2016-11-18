module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/vr', function(req, res) {
    res.send('vr.html');
  });
}
