const logFeatures = require('../config/log-features')
const logConfigs = require('../config/log-configs')
const { handleWrapping, isConstructor, isObject, isFunction}  = require('./utils/index.js')
const isConfigValid = require('../validators/config-validator');
const loggerifyConstructor = require('./loggerify-constructor')
const loggerifyObject = require('./loggerify-object')
const loggerifyFunction = require('./loggerify-function')
const logWrappers = require('../wrappers/log-wrappers')

const loggerify = (app, config) => {
    if (!isConfigValid(config, logFeatures)) throw new Error(`Invalid configs, some of the config missed one of the following properties: ${logConfigs}`)
    const loggerifiersParams = [app, handleWrapping, logWrappers, logFeatures, config];

    if (isObject(app)) {
        return loggerifyObject(...loggerifiersParams)
    } else if (isConstructor(app)) {
        return loggerifyConstructor(...loggerifiersParams)
    } else if (isFunction(app)) {
        return loggerifyFunction(...loggerifiersParams)
    } else {
        throw new Error(`Invalid type ${typeof app} not supported`)
    }
}

module.exports = loggerify