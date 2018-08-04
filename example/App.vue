<template>
    <div id="app">
        <el-card class="ve-container">
            <h1>全数据配置表格 DEMO</h1>
            <el-table-data-config
                border
                show-summary
                height="500"
                tableClassName="my-data-table"
                :source="source"
                :columns="columns"
                :row-class-name="setRowClassName"
                @expand-change="expandChangeEvt">
                <template slot="expand" slot-scope="{row}">
                    <p style="text-indent: 20px;">这是展开的内容：</p>
                    <ul v-for="col in columns" :key="col.label">
                        <li v-if="!col.fake" style="float: left; margin-right: 40px;">
                            {{ col.label }}：{{ row[col.prop] }}
                        </li>
                    </ul>
                </template>
            </el-table-data-config>
        </el-card>
    </div>
</template>

<script>
import { ElTableDataConfig } from '../src/index.js';

import Config from './config';

export default {
    components: {
        'el-table-data-config': ElTableDataConfig
    },
    data() {
        return {
            source: Config.source,
            columns: Config.columns
        };
    },
    methods: {
        expandChangeEvt(row, expandRows) {
            console.log(row, expandRows);
        },
        setRowClassName({row, rowIndex}) {
            var i = rowIndex % 3;
            return i === 0
                    ? 'color-1'
                    : i === 1
                        ? 'color-2'
                        : '';
        }
    }
};
</script>

<style lang='scss'>
$table-padding: 10px;
$h-margin: 5px;
$h-left: 10px;

.ve-container {
    position: relative;
    width: calc(1200px - #{$table-padding});
    margin: 40px auto 0;
    padding: $table-padding;
    h1 {
        position: relative;
        margin: 0 0 $h-left * 2 $h-left;
        color: #333;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0 - $h-left;
            width: 4px;
            height: calc(100% - #{$h-margin * 2});
            margin-top: $h-margin;
            background: #333;
        }
    }
    .my-data-table {
        tr {
            &.color-1 {
                background-color: #eee;
            }
            &.color-2 {
                background-color: #ddd;
            }
        }
    }
}
</style>