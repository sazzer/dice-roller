import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        saveRoll: function(rollName, numberOfDice, numberOfSides) {
            alert(`Rolling ${numberOfDice}D${numberOfSides} as "${rollName}"`);
        }
    }
});
