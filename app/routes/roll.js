import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        saveRoll: function(rollName, numberOfDice, numberOfSides) {
            const store = this.get('store');
            const roll = store.createRecord('roll', {
                rollName,
                numberOfDice,
                numberOfSides
            });
            roll.save();
        }
    }
});
