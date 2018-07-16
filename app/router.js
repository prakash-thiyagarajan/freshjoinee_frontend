import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup',{path: '/signup'});
  this.route('view',{path: '/view'});
  this.route('login',{path: '/login'});
  this.route('next',{path: '/next'})
});

export default Router;
