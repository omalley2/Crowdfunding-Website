// Middleware that redirects unauthenticated users to /login
module.exports = function withAuth(req, res, next) {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};
