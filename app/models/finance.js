import DS from 'ember-data';

export default DS.Model.extend({
  bankname: DS.attr('string'),
  account_number: DS.attr('string'),
  pan: DS.attr('string'),
  aadhar: DS.attr('string'),
  ifsc_code: DS.attr('string'),
  user_id: DS.attr('integer'),

});
