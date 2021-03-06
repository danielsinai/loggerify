const {expect} = require('chai');
const loggerify = require('../src/index.js');
const config = require('./config/tests-configuration')

describe("Testing regular function loggerifying", () => {
    let start, end, error = null;

    before(() => {
        function arrowFunc(){ console.log('go');}
        function arrowFunctionWithError(){throw new Error('error occured')};

        const mutator = {
            start: (message) => start = message,
            end: (message) => end = message,
            error: (message) => error = message
        };
        try {
            loggerify(config(mutator))(arrowFunc)();
            loggerify(config(mutator))(arrowFunctionWithError)();
        } catch (e) {
        }
    })

    describe('Testing start method', () => {
        it('should include the function name', () => {
            expect(start).to.includes('arrowFunc');
        })
        it('should include the argmunets given to the function', () =>{
            expect(start).to.includes('{}');
        })
    })
    describe('Testing end method', () => {
        it('should include the function name', () => {
            expect(end).to.includes('arrowFunc');
        })
    })
    describe('Testing error method', () => {
        it('should include the function name', () => {
            expect(error).to.includes('arrowFunc');
        })
    })
})