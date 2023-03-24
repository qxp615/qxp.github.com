import React from 'react'
import styles from './styles.less'
import type { DataNode, TreeProps } from 'antd/es/tree';
import Conic from './conic';
import Line from './line';
import Radial from './radial';
import Property from './property';
import Transform from './transform';
import Transaction from './transaction';

export default function Gradual() {
    return (
        <div>
            <div>
                这些渐变都可以在前面加个repeating-，如 repeating-radial-gradient，将会重复参数所用的东西
                <h2>线性渐变：</h2>

                <div className={styles.line_1}>
                    普通的线性渐变无法过渡：
                </div>

                <div className={styles.line_2}>
                    使用自定义属性可以过渡
                </div>

                <div className={styles.line_3}>
                    自定义属性可以用于动画：,

                </div>



                <div className={styles.wave_1}>

                </div>
                <h2>圆锥渐变：</h2>


            </div>
        </div>
    )
}

export const gradualTree: DataNode = {
    title: '动画等',
    key: 'gradurlTree',
    children: [

        {
            title: '自定义属性',
            key: 'property'
        },
        {
            title: '线性渐变',
            key: 'line-gradient',
        },
        {
            title: '径向渐变',
            key: 'radial-gradient',
        },
        {
            title: '圆锥渐变',
            key: 'conic-gradient',
        },
        {
            title: '2d,3d变幻',
            key: 'Transform',
        },
        {
            title: '过渡与requestAnimationFrame',
            key: 'Transaction'
        }
    ]
}
export const gradualTreeMap = {
    'line-gradient': Line,
    'radial-gradient': Radial,
    'conic-gradient': Conic,
    'property': Property,
    'Transform': Transform,
    'Transaction': Transaction
}