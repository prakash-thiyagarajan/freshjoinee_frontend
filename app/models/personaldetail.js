import DS from 'ember-data';

export default DS.Model.extend({
  employee_id: DS.attr('string'),
  name: DS.attr('string'),
  dob: DS.attr('date'),
  emergency_contact: DS.attr('integer'),
  gender: DS.attr('string'),
  email: DS.attr('string'),

});
