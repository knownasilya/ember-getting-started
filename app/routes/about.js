import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return { description: 'This is my about page' };
  }
});
