const logWarppers = {
    start: (fn, logFunction) => {
        return function () {
            this.name = fn.name;
            logFunction(`function ${fn.name} started with the arguments: ${JSON.stringify(arguments)}`);
            return fn.apply(this, arguments);
        }
    },
    end: (fn, logFunction) => {
        return function() {
            const response = fn.apply(this, arguments);
            logFunction(`function ${fn.name} ended successfully`);
            return response;
        }
    },
    error: (fn, logFunction) => {
        return function() {
            try {
                return fn.apply(this, arguments);
            } catch (e) {
                logFunction(`error occured in function ${fn.name} error: ${e}`);
                throw e;
            }    
        }
    }
}

module.exports = logWarppers