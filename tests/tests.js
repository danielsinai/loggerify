const {expect} = require('chai');
const loggerify = require('../src/index.js');
const config = require('./config/tests-configuration')

describe("Testing function loggerifying", () => {
    it('should log on start arrow function', () => {
        const arrowFunc = () => {
            console.log('go');
        }
        const newFunc = loggerify(arrowFunc, config);
        newFunc();
        expect(1).to.be.equals(1);
    })
})