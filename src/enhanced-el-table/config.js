import Text from './text/index';

const config = {};

config.ALL_METHODS_NAME = [
    'clearSelection',
    'toggleRowSelection',
    'toggleAllSelection',
    'toggleRowExpansion',
    'setCurrentRow',
    'clearSort',
    'clearFilter',
    'doLayout',
    'sort'
];

config.ALL_BOOLEAN_KEYS = [
    'stripe',
    'border',
    'fit',
    'show-header',
    'highlight-current-row',
    'default-expand-all',
    'show-summary',
    'select-on-indeterminate'
];

config.BASE_TYPES = [
    'selection',
    'expand',
    'index'
];

config.BASE_COLUMN_KEY = {
    label: 'label',
    prop: 'prop'
};

config.BASE_COLUMN_PROPS = {
    align: 'left',
    component: Text
};

export default config;