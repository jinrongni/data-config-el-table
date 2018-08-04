<template>
    <el-table
        class="m-el-table-data-config"
        :class="tableClassName"
        ref="refEnhancedElTable"
        :data="source"
        v-bind="bindOriginalBooleanAttrs"
        v-on="$listeners">
        <!-- 处理之后的列 -->
        <template v-for="col in formatColumns">
            <!-- 特殊列：行展开、多选、索引 -->
            <template v-if="!!col.type">
                <!-- 行展开 -->
                <el-table-column
                    v-if="col.type === 'expand'"
                    v-bind="col.props"
                    :type="col.type"
                    :key="col.type">
                    <template slot-scope="props">
                        <slot :name="col.type" v-bind="props"></slot>
                    </template>
                </el-table-column>
                <!-- 多选、索引 -->
                <el-table-column
                    v-else
                    :key="col.type"
                    :type="col.type"
                    v-bind="col.props">
                </el-table-column>
            </template>
            <!-- 常规列 -->
            <template v-else>
                <!-- 组件 -->
                <el-table-column
                    v-if="!!col.component"
                    v-bind="col.props"
                    :label="col.label">
                    <template slot-scope="scope">
                        <component
                            :is="col.component"
                            v-bind="setTplCommBind(scope, col)"
                            v-on="col.component.listeners">
                        </component>
                    </template>
                </el-table-column>
                <!-- 普通渲染 -->
                <el-table-column
                    v-else
                    v-bind="col.props"
                    :label="col.label"
                    :prop="col.prop">
                </el-table-column>
            </template>
        </template>
    </el-table>
</template>

<script>
import ElTable from 'element-ui/lib/table';
import ElTableColumn from 'element-ui/lib/table-column';

import methods from './methods/index';

import Config from './config';

export default {
    name: 'el-table-data-config',
    mixins: [
        methods
    ],
    props: {
        tableClassName: {
            type: String
        },
        columns: {
            type: Array,
            default() {
                return [];
            }
        },
        source: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {
        // 支持 el-table 本身的 boolean 属性
        bindOriginalBooleanAttrs() {
            const KEYS = Config.ALL_BOOLEAN_KEYS;
            const { $attrs } = this;
            const _attrs = {};

            Object.keys($attrs).forEach(key => {
                const v = $attrs[key];
                const uKey = key.replace(/([A-Z])/, '-$1').toLowerCase();
                _attrs[key] = ~KEYS.indexOf(uKey) && v === '' ? true : v;
            });

            return _attrs;
        },
        // 格式化列
        formatColumns() {
            const { columns } = this;
            const colsMap = Object.assign({}, Config.BASE_COLUMN_KEY);

            const formatColumns = columns.map(col => {
                const item = Object.assign({}, Config.BASE_COLUMN_PROPS, col);

                if(!(item.type
                    || typeof item.type === 'string'
                    || ~Config.BASE_TYPES.indexOf(item.type))) {
                    item.type = '';
                }
                item.label = item[colsMap.label];
                item.prop = item[colsMap.prop];
                item.props = {};

                Object.keys(item).forEach(k => {
                    item.props[k] = item[k];
                });

                return item;
            });

            return formatColumns;
        }
    },
    methods: {
        setTplCommBind({ row, column }, col) {
            return { row, col, column };
        }
    },
    components: {
        [ElTable.name]: ElTable,
        [ElTableColumn.name]: ElTableColumn
    }
}
</script>

<style lang='scss'>
    @import './style/index.scss';
</style>
