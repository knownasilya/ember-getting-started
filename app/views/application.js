import Ember from 'ember';

export default Ember.View.extend({
  initLeaflet: function () {
    var $map = this.$().find('#map');
    var map = L.map($map.get(0), {
      center: [51.505, -0.09],
      zoom: 13
    });

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);
  }.on('didInsertElement')
});
