# loggerify
  Fast, lightweight, minimalist logging framework for [node](http://nodejs.org).
  
# Installation
```bash
$ npm install loggerify
```

# Quick Start
```js
const config = {
    error: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.error
    },
    start: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.info
    },
    end: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.debug
    },
}
const loggerifyMe = () => console.log('LOG ME NOW')
const loggerify = require('loggerify')
const loggerifiedFunction = loggerify(config)(loggerifyMe)

loggerifiedFunction()
// function loggerifyMe started with the arguments: {}
// LOG ME NOW
// function loggerifyMe ended successfully
```

## Features

  * Logging as config
  * Easy to use
  * Wrapping Classes, objects, Functions and Arrow Functions at the same api

## Motivation

  Logging can become preety tough and uncomftorable, while you add more and more functions the code becoming less readable and clean.
  instead of doing logger.info evrey second line of code, you can use a loggerify framework that will do that for you!

## Examples
```js
const config = {
    error: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.error
    },
    start: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.info
    },
    end: {
        shouldLog: true,
        exceptions: [],
        logFunction: console.debug
    },
}
const loggerify = require('loggerify')
const configuredLoggerifier = loggerify(config)
```
 #### Loggerify Class
 ```js
class Dog {
    constructor() {
    }

    bark() {
        console.log('WOOF')
    }
}

const loggeredDog = new (configuredLoggerifier(Dog));

loggeredDog.bark();

//function bark started with the arguments: {}
//WOOF
//function bark ended successfully
```
 #### Loggerify Object
 ```js
 const dog =  {
    bark: () => {
        console.log('WOOF')
    }
}

const loggeredDog =  configuredLoggerifier(dog);

loggeredDog.bark();
//function bark started with the arguments: {}
//WOOF
//function bark ended successfully
```
 #### Loggerify Function
 ```js
 function bark () {
    console.log('WOOF');
}

const loggeredBark =  configuredLoggerifier(bark);

loggeredBark();
//function bark started with the arguments: {}
//WOOF
//function bark ended successfully
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## Contributing

Feel free to open issues and to share PR's :)

## People

The original author of Loggerify is [Daniel Sinai](https://github.com/danielsinai)

## License

  [MIT](LICENSE)
