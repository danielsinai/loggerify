module.exports = (mutatingObj) => ({
    error: {
        shouldLog: true,
        exceptions: [],
        logFunction: mutatingObj.error
    },
    start: {
        shouldLog: true,
        exceptions: [],
        logFunction: mutatingObj.start
    },
    end: {
        shouldLog: true,
        exceptions: [],
        logFunction: mutatingObj.end
    },
});