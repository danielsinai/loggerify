const handleWrapping = (decorationFn, fn, loggerConfig, key) => {
    if (loggerConfig) {
        const {shouldLog, exceptions, logFunction} = loggerConfig;

        const functionName = fn.name !== '' ? fn.name : key;
        const shouldWrapFunction = shouldLog && exceptions && !exceptions.includes(key);
        const decoratedFn = shouldWrapFunction ? decorationFn(fn, logFunction) : fn;

        Object.defineProperty(decoratedFn, "name", {value: functionName})

        return decoratedFn;
    }
        return fn;
}

const isConstructor = (obj) => {
    const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class'
    if(obj.prototype === undefined) {
        return isCtorClass
    }
    const isPrototypeCtorClass = obj.prototype.constructor
        && obj.prototype.constructor.toString
        && obj.prototype.constructor.toString().substring(0, 5) === 'class'
    return isCtorClass || isPrototypeCtorClass
}

const isFunction = (obj) => {
    return typeof obj === 'function'
}

const isObject = (obj) => {
    return typeof obj === 'object'
}
module.exports = {
    handleWrapping, 
    isConstructor,
    isFunction,
    isObject,
}