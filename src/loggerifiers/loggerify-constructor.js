const loggerifyConstructor = (appClass, handleWrapping, logWrappers, logFeatures, config) => {
    const appEntries = Object.getOwnPropertyNames(appClass.prototype);
    const clonedClass = class clonedClass extends appClass {}

    appEntries.forEach((prototype) => {
        if (typeof clonedClass.prototype[prototype] === 'function') {
            clonedClass.prototype[prototype] = logFeatures.reduce(
                (decoratedFn, logFeature) => handleWrapping(logWrappers[logFeature], decoratedFn, config[logFeature], prototype), clonedClass.prototype[prototype]);
        }
    });

    return clonedClass;
}

module.exports = loggerifyConstructor