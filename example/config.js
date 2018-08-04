export default {
    columns: [
        {
            fake: true,                 // 非正常内容
            type: 'expand',
            label: '展开',
            fixed: 'left',
            align: 'center',
            width: '60'
        },
        {
            fake: true,
            label: '全选',
            type: 'selection',
            fixed: 'left',
            align: 'center',
            width: '60'
        },
        {
            fake: true,
            label: '序号',
            type: 'index',
            index: (i) => i + 1,
            fixed: 'left',
            align: 'center',
            width: '60'
        },
        {
            label: 'id',
            prop: 'id',
            sortable: true
        },
        {
            label: '姓名',
            prop: 'name',
            width: '200'
        },
        {
            label: '年龄',
            prop: 'age',
            width: '240',
            sortable: true,
            component: {
                template: `
                    <el-input-number
                        v-model="row.age"
                        :min="1"
                        :max="40"
                        label="描述文字">
                    </el-input-number>
                `,
                props: ['row'],
                methods: {
                    //
                },
                listeners: {
                    //
                }
            }
        },
        { label: '地址', prop: 'address', width: '450' },
        { label: '职位', prop: 'job' },
        {
            fake: true,
            label: '操作',
            fixed: 'right',
            width: '100',
            component: {
                template: `
                    <el-button @click="showModal">
                        删除
                    </el-button>
                `,
                props: ['row'],
                methods: {
                    showModal () {
                        const vm = this;
                        vm.$emit('row-operate', {
                            sender: vm,
                            row: vm.row
                        });

                        vm.$confirm('这是一个提示, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning',
                            center: true
                        }).then(() => {
                            vm.$message({
                              type: 'success',
                              message: '点了确定!'
                            });
                        }).catch(() => {
                            vm.$message({
                              type: 'info',
                              message: '点了取消'
                            });
                        });
                    }
                },
                listeners: {
                    'row-operate'(item) {
                        console.log('row-operate', item);
                    }
                }
            }
        }
    ],
    source: [
        {
            id: 111,
            name: '张三',
            age: 20,
            address: '张三的地址',
            job: '前端'
        },
        {
            id: 112,
            name: '李四',
            age: 23,
            address: '李四的地址李四的地址李四的地址李四的地址李四的地址李四的地址李四的地址李四的地址',
            job: '前端'
        },
        {
            id: 113,
            name: '王五',
            age: 31,
            address: '王五的地址',
            job: '产品'
        },
        {
            id: 114,
            name: '赵六',
            age: 21,
            address: '赵六的地址',
            job: 'qa'
        },
        {
            id: 115,
            name: '马七',
            age: 27,
            address: '马七的地址',
            job: '后端'
        },
        {
            id: 116,
            name: '侯八',
            age: 29,
            address: '侯八的地址',
            job: '前端'
        },
        {
            id: 117,
            name: '贾九',
            age: 31,
            address: '贾九的地址',
            job: '前端'
        },
        {
            id: 118,
            name: '郑十',
            age: 25,
            address: '郑十的地址',
            job: '前端'
        },

    ]
};