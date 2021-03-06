import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    refreshFruits() {

      this.store.query('fruits', {ascending: "colour"}).then(function (fruits) {
        console.log(fruits);
        this.set("fruits", fruits);
      }.bind(this));
    },
    findOne() {
      this.store.findRecord('fruits', '2D7dKQbCGZ').then(function(fruit) {
        console.log(fruit);
      });
    },
    deleteFruit(fruit) {
      this.store.findRecord('fruits', fruit.id, { backgroundReload: false }).then(function(froot) {
        froot.destroyRecord();
      }.bind(this));

    },
    removeTaste(fruit) {
      this.store.findRecord('fruits', fruit.id, {backgroundReload: false}).then(function(froot) {
        froot.set("taste", undefined);
        froot.save();
      });
    }
  }
});
