const {expect} = require('chai');
const loggerify = require('../src/index.js');
const config = require('./config/tests-configuration')

describe("Testing class methods loggerifying", () => {
    let start, end, error = null;

    before(() => {
        class classTest {
            constructor() {
                this.bla = 'blu';
            }
            errorMethod() {
                throw new Error();
            }

            method() {
                console.log('go');
            }
        }

        const mutator = {
            start: (message) => start = message,
            end: (message) => end = message,
            error: (message) => error = message
        };

        const wrappedClass = loggerify(classTest, config(mutator));
        const loggeredMethodsClass = new wrappedClass();
        try {
            loggeredMethodsClass.errorMethod();
        } catch {}
        loggeredMethodsClass.method();
    })

    describe('Testing start method', () => {
        it('should include the function name', () => {
            expect(start).to.includes('method');
        })
        it('should include the argumnets given to the function', () =>{
            expect(start).to.includes('{}');
        })
    })
    describe('Testing end method', () => {
        it('should include the function name', () => {
            expect(end).to.includes('method');
        })
    })
    describe('Testing error method', () => {
        it('should include the function name', () => {
            expect(error).to.includes('errorMethod');
        })
    })
})