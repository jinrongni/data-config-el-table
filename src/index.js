import EnhancedElTable from './enhanced-el-table/index.vue';
import MixinMethods from './enhanced-el-table/methods';

const EnElTable = {
    EnhancedElTable,
    install(Vue) {
        Vue.component(EnhancedElTable.name, EnhancedElTable);
    },
    _mixinsMethods: MixinMethods
};

export default EnElTable;
export { EnhancedElTable };