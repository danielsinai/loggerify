const loggerifyFunction = (app, handleWrapping, logWrappers, logFeatures, config) => {

    return logFeatures.reduce(
        (decoratedFn, logFeature) => handleWrapping(logWrappers[logFeature], decoratedFn, config[logFeature], "anonymus"), app);
}

module.exports = loggerifyFunction;