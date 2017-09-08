import { hasMany, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  employees: hasMany('employee', {inverse: 'company'})
});
