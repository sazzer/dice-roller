import DS from 'ember-data';

export default DS.Model.extend({
    rollName: DS.attr('string'),
    numberOfDice: DS.attr('number'),
    numberOfSides: DS.attr('number'),
    result: DS.attr('number')
});
