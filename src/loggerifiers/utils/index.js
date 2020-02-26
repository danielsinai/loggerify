const handleWrapping = (decorationFn, fn, loggerConfig, key) => {
    if (loggerConfig) {
        const {shouldLog, exceptions, logFunction} = loggerConfig;    
        const functionName = fn.name !== '' ? fn.name : key;
        Object.defineProperty(fn, "name", { value: functionName })    
    
        const shouldWrapFunction = shouldLog && exceptions && !exceptions.includes(key);
        return shouldWrapFunction ? decorationFn(fn, logFunction) : fn;
    } else {
        return fn;
    }
}

const isConstructor = (obj) => {
    return !!obj.prototype && !!obj.prototype.constructor.name;
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