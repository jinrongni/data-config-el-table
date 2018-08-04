import Config from './../config';

const methods = {};

Config.ALL_METHODS_NAME.forEach(name => {
    methods[name] = (...args) => {
        const {
            refDataConfigElTable
        } = this.$refs;

        if(refDataConfigElTable && refDataConfigElTable[name]) {
            refDataConfigElTable[name](...args);
        }
    }
});

export default {
    methods
};
