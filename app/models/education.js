import DS from 'ember-data';

export default DS.Model.extend({
  college_name: DS.attr('string'),
  college_location: DS.attr('string'),
  department: DS.attr('string'),
  cgpa: DS.attr('string'),
  hsc_schoolname: DS.attr('string'),
  hsc_location: DS.attr('string'),
  hsc_stream: DS.attr('string'),
  hsc_percentage: DS.attr('string'),
  sslc_schoolname: DS.attr('string'),
  sslc_location: DS.attr('string'),
  sslc_percentage: DS.attr('string'),
  user_id: DS.attr('integer'),



});
