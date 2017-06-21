/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const documentationsController = controllers && controllers.documentations;
const documentsController = controllers && controllers.documents;
const organizationsController = controllers && controllers.organizations;
const sectionsController = controllers && controllers.sections;
const subdocumentsController = controllers && controllers.subdocuments;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
    app.get('/currentuser', usersController.currentuser);
    app.post('/updateuser/:id', usersController.update);
    app.delete('/removeuser', usersController.remove);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if (documentationsController) {
    app.get('/documentations', documentationsController.all);
    app.post('/adddocumentation', documentationsController.add);
    app.post('/updatedocumentation', documentationsController.update);
    app.delete('/removedocumentaion', documentationsController.remove);
  } else {
    console.warn(unsupportedMessage('documentations routes'));
  }

  if (documentsController) {
    app.get('/documents', documentsController.all);
    app.post('/adddocuments', documentsController.add);
    app.post('/updatedocumentation', documentsController.update);
    app.delete('/removedocumentaion', documentsController.remove);
  } else {
    console.warn(unsupportedMessage('document routes'));
  }

  if (organizationsController) {
    app.get('/organizations', organizationsController.all);
    app.post('/addorganization', organizationsController.add);
    app.post('/updateorganization', organizationsController.update);
    app.delete('/removeorganizations', organizationsController.remove);
  } else {
    console.warn(unsupportedMessage('oragnization routes'));
  }

  if (sectionsController) {
    app.get('/sections', sectionsController.all);
    app.post('/addsection', sectionsController.add);
    app.post('/updatesection', sectionsController.update);
    app.delete('/removesection', sectionsController.remove);
  } else {
    console.warn(unsupportedMessage('section routes'));
  }

  if (subdocumentsController) {
    app.post('/addsubdocument', subdocumentsController.add);
    app.get('/subdocuments', subdocumentsController.all);
    app.post('/updatesubdocument', subdocumentsController.update);
    app.delete('/removesubdocument', subdocumentsController.remove);
  } else {
    console.warn(unsupportedMessage('subdocument routes'));
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }
};
