export const subnav = [
    {
        id: '1',
        name: '首页',
        path: '/firsthome'
    }, {
        id: '2',
        name: '订单管理',
        path: '/order',
        children: [
            {
                id: "7",
                name: "货款订单",
                path: '/order/loans'
            }, {
                id: "8",
                name: "转单订单",
                path: '/order/transfer'
            }, {
                id: "9",
                name: "保险订单",
                path: '/order/insurance'
            }
        ]

    }, {
        id: '3',
        name: '财务管理',
        path: '/financial'
    }, {
        id: '4',
        name: '组织架构',
        path: '/organization'
    }, {
        id: '5',
        name: '数据统计',
        path: '/data'
    }, {
        id: '6',
        name: '商务管理',
        path: '/business'
    }
]