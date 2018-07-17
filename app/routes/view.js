import Route from '@ember/routing/route';
//import Service from '@ember/service'

export default Route.extend({
  model()
  { /*if (this.get('session').getSessionData())
    console.log("1");
    else {
      alert("Please login to enter this page")
      this.transitionTo('login')
    }*/
    return this.store.findAll('contact');
  }
});
