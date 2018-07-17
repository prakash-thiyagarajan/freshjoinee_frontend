import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  user_id: DS.attr('integer'),

});
