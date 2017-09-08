import DS from 'ember-data';

export default DS.Model.extend({
  employees: DS.hasMany('employee', { inverse: 'company' })
});
