/* global Materialize:false */
import Ember from 'ember';

export default Ember.Component.extend({
    rollName: '',
    numberOfDice: 1,
    numberOfSides: 6,

    didRender() {
        Materialize.updateTextFields();
    },

    actions: {
        triggerRoll() {
            this.sendAction('roll', this.rollName, this.numberOfDice, this.numberOfSides);
            return false;
        }
    }
});
