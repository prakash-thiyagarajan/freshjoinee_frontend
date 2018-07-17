import DS from 'ember-data';

export default DS.Model.extend({
  father_name: DS.attr('string'),
  father_dob: DS.attr('date'),
  mother_name: DS.attr('string'),
  mother_dob: DS.attr('date'),
  spouse_name: DS.attr('string'),
  spouse_dob: DS.attr('date'),
  child1_name: DS.attr('string'),
  child1_dob: DS.attr('date'),
  child2_name: DS.attr('string'),
  child2_dob: DS.attr('date'),
  child3_name: DS.attr('string'),
  child3_dob: DS.attr('date'),
  user_id: DS.attr('integer'),
});
