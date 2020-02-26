const isLoggerConfigValid = (loggerConfig) => {
    const {shouldLog, exceptions, logFunction} = loggerConfig;
    return shouldLog !== undefined && exceptions && logFunction;
}

const isConfigValid = (config, logFeatures) => {
   return config && logFeatures.reduce((isOk, feature) => isOk && isLoggerConfigValid(config[feature]), true) 
}

module.exports = isConfigValid