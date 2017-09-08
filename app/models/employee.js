import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company', { inverse: 'employees' })
});
