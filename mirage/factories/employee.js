import { belongsTo, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  company: belongsTo('company', {inverse: 'employees'})
});
