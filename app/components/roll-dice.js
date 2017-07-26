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
            alert(`Rolling ${this.numberOfDice}D${this.numberOfSides} as "${this.rollName}"`);
            return false;
        }
    }
});
