import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr('string'),
  designation: DS.attr('string'),
  experience: DS.attr('string'),
  nth_company: Ds.attr('integer'),
  user_id: DS.attr('integer'),

});
