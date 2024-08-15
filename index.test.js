// Import the assert module
const assert = require('assert');

// Import the division function from the index.js file
const division = require('./index.js').division;
const isPar = require('./isPar.js').isPar;

// Test cases for the division function
describe('division', () => {
    it('deve retornar a divisão correta entre dois números', () => {
        assert.strictEqual(division(10, 2), 5);
        assert.strictEqual(division(15, 3), 5);
        assert.strictEqual(division(8, 4), 2);
    });

    it('deve disparar um erro ao dividir por zero', () => {
        assert.throws(() => division(10, 0), Error);
    });
});

describe('isPar', () => {
    it('deve retornar true'), () => {
        assert.strictEqual(isPar(2), true);
    };
    it('deve retornar erro', () => {
        assert.throws(() => isPar(5), Error);
    })
});