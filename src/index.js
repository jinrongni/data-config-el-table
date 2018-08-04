import DataConfigElTable from './data-config-el-table/index.vue';
import MixinMethods from './data-config-el-table/methods';

const DCElTable = {
    DataConfigElTable,
    install(Vue) {
        Vue.component(EnhancedElTable.name, DataConfigElTable);
    },
    _mixinsMethods: MixinMethods
};

export default DCElTable;
export { DataConfigElTable };