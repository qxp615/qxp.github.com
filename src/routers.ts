/* eslint-disable import/no-anonymous-default-export */
import { Children, lazy, LazyExoticComponent } from 'react'
export type RoutersConfigType = routeConfig[]
interface routeConfig {
    path: string,
    component: (() => JSX.Element) | LazyExoticComponent<any>
    redirect?: string
    index?: boolean
    /** 作为左侧标题栏的名字 */
    name?: string
    /** 如果想要添加子路由，必须在写有children的地方使用Outlet组件来作为子路由的出口 */
    children?: routeConfig[]
}

const routesConfig: RoutersConfigType = [
    {
        path: '/css',
        component: lazy(() => import('./pages/cssTest')),
        name:'css总结'
    },
    {
        path: '/demos',
        component: lazy(() => import('./pages/myDemos/')),
        name: '临时的一些demo'
    },
    {
        path: '/jsapi',
        component: lazy(() => import('./pages/jsApi')),
        name: 'js api练习'
    },
    {
        path: '/react_code',
        component: lazy(() => import('./App')),
        name: 'react测试',
        children: [
            {
                path: 'hooks-test',
                component: lazy(() => import('./pages/readReact/index')),
                name: 'hooks 测试',
                children: [
                    {
                        path: 'use-state',
                        component: lazy(() => import('./pages/readReact/pages/useStateTest/index')),
                        name: 'useState'
                    }
                ]
            }
        ]

    }, {
        path: '/components',
        name: '组件',
        component: lazy(() => import('./pages/myComponents')),
        children: [
            {
                path: 'antd-mobile',
                name: 'antd-mobile',
                component: lazy(() => import('./pages/myComponents/antdMobile')),
                children: [
                    {
                        path: 'steps',
                        name: 'steps',
                        component: lazy(() => import('./pages/myComponents/antdMobile/Steps'))
                    }
                ]
            }

        ]

    }
]

export default routesConfig
