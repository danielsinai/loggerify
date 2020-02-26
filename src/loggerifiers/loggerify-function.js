const loggerifyFunction = (app, handleWrapping, logWrappers, logFeatures, config) => {

    return logFeatures.reduce(
        (decoratedFn, logFeature) => handleWrapping(logWrappers[logFeature], decoratedFn, config[logFeature], key), value);
}

module.exports = loggerifyFunction;