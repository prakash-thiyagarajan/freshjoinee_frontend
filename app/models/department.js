import DS from 'ember-data';

export default DS.Model.extend({
  dept_name: DS.attr('string'),
  password: DS.attr('string'),
  personaldetail: DS.attr('integer'),
  finance: DS.attr('integer'),
  education: DS.attr('integer'),
  employment: DS.attr('integer'),

});
