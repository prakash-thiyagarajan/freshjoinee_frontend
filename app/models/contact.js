import DS from 'ember-data';

export default DS.Model.extend({
  phone: DS.attr('number'),
  user_id: DS.attr('number')
});
