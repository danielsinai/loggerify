const DEFAULT_NAME = "anonymous";

const loggerifyFunction = (app, handleWrapping, logWrappers, logFeatures, config) => {

    return logFeatures.reduce(
        (decoratedFn, logFeature) => handleWrapping(logWrappers[logFeature], decoratedFn, config[logFeature], DEFAULT_NAME), app);
}

module.exports = loggerifyFunction;