import Controller from '@ember/controller';

export default Controller.extend({

    actions:{

        createUser: function(){

        let rec = this.store.createRecord('user',{ first_name: this.get('first_name'), last_name: this.get('last_name'), emp_id: this.get('emp_id'), password: this.get('password')})

        rec.save().then(()=> {alert('Success');this.transitionToRoute('login')}, ()=> {alert('Enter valid credentials: Employee id or secret password may wrong')})

      }
    }


});
