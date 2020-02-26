const loggerifyObject = (app, handleWrapping, logWrappers, logFeatures, config) => {
    const newApp = Object.assign({}, app);
    const appEntries = Object.entries(app);

    appEntries.forEach(([key, value]) => {
        if (typeof value === 'function') {
            newApp[key] = logFeatures.reduce(
                (decoratedFn, logFeature) => handleWrapping(logWrappers[logFeature], decoratedFn, config[logFeature], key), value);
        }
    });

    return newApp;
}

module.exports = loggerifyObject;