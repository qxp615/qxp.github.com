/* eslint-disable import/no-anonymous-default-export */
import path from 'path'
import { lazy, LazyExoticComponent } from 'react'
export type RoutersConfigType = routeConfig[]
interface routeConfig {
    path: string,
    component: (() => JSX.Element) | LazyExoticComponent<any>
    name?: string
    /** 如果想要添加子路由，必须在写有children的地方使用Outlet组件来作为子路由的出口 */
    children?: routeConfig[]
}

const routesConfig: RoutersConfigType = [
    {
        path: '/',
        component: lazy(() => import('./App')),
        name: 'react测试',
        children: [
            {
                path: 'hooks-test',
                component: lazy(() => import('./pages/hooksTest/index')),
                name: 'hooks 测试',
                children: [
                    {
                        path: 'use-state',
                        component: lazy(() => import('./pages/hooksTest/pages/useStateTest/index')),
                        name: 'useState'
                    }
                ]
            }
        ]

    }
]

export default routesConfig
