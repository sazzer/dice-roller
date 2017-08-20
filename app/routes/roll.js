import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        saveRoll: function(rollName, numberOfDice, numberOfSides) {
            let result = 0;
            for (let i = 0; i < numberOfDice; ++i) {
                result += 1 + (parseInt(Math.random() * numberOfSides));
            }

            const store = this.get('store');
            const roll = store.createRecord('roll', {
                rollName,
                numberOfDice,
                numberOfSides,
                result
            });
            roll.save();
        }
    }
});
