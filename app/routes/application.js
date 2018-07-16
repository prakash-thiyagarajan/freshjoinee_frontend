import Route from '@ember/routing/route';

export default Route.extend({


  actions: {
    logout: function() {
    //console.log(credentials);
      this.get('session').logout().then(()=>{this.transitionTo('login');alert("Successfully logged out")})



  },
  goToLogin: function(){
    this.transitionTo('login')
  }

}

});
