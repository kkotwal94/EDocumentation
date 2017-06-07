import passport from 'passport';
import _ from 'lodash';
import User from '../models/user';

/**
 * POST /login
 */
export function login(req, res, next) {
  // Do email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.sendStatus(401);
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.sendStatus(401);
      return res.sendStatus(200);
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {
    if (existingUser) {
      return res.sendStatus(409);
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.sendStatus(401);
        return res.sendStatus(200);
      });
    });
  });
}

export function currentuser(req, res, next) {
  if (req.isAuthenticated()){
          var user = req.user;
          res.json(user);
          }
  else {
    res.json();
    return next();
  }
}

export function update(req, res) {
    const query = {
        id: req.params.id
    };
    const omitKeys = ['id', '_id', '_v'];
    const data = _.omit(req.body, omitKeys);
    User.findOneAndUpdate(query, data, (err) => {
        if (err) {
            console.log('Error on save!');
            return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
    });
}

export function remove(req, res) {
    const query = {
        id: req.params.id
    };
     User.findOneAndRemove(query, (err) => {
        if (err) {
            console.log('Error on delete');
            return res.status(500).send('We failed to delete for some reason');
        }

        return res.status(200).send('Removed Successfully');
    });
}

export default {
    login,
    logout,
    signUp,
    update,
    remove,
    currentuser
};
