import Config from './../config';

const methods = {};

Config.ALL_METHODS_NAME.forEach(name => {
    methods[name] = (...args) => {
        const {
            refEnhancedElTable
        } = this.$refs;

        if(refEnhancedElTable && refEnhancedElTable[name]) {
            refEnhancedElTable[name](...args);
        }
    }
});

export default {
    methods
};
