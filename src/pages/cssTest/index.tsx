import React, { useState } from 'react'
import Scroll from './scroll';
import styles from './styles.less'
import { Tree } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import type { DataNode, TreeProps } from 'antd/es/tree';
import Gradual, { gradualTree, gradualTreeMap } from './gradualChange';
import Grid from './flexGrid/grid';
import Column from './flexGrid/column';
import Zindex from './flexGrid/zindex';


const treeData: DataNode[] = [
    {
        title: 'css',
        key: 'css',
        children: [
            {
                title: '滚动相关',
                key: 'scroll',
                children: [
                    {
                        title: '滚动',
                        key: 'scroll-1',
                    },
                    {
                        title: '轮播图',
                        key: 'scroll-2',
                    },
                ],
            },
            {
                title: '布局',
                key: 'flexAndGrid',
                children: [
                    {
                        title: 'flex',
                        key: 'flex',
                    }, {
                        title: 'grid',
                        key: 'grid'
                    }, {
                        title: 'column',
                        key: 'column'
                    }, {
                        title: '层叠上下文',
                        key: 'zindex'
                    }
                ]
            },
            gradualTree,
            {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                    },
                ],
            },
        ],
    },
]

export default function MyDemo() {
    const [nodeKey, setNodeKey] = useState('react-fiber')

    const onSelect = (e: any) => {
        setNodeKey(e)
    }
    return (
        <div>一些还没分类的demo
            <br />
            <div className={styles.container}>

                <div className={styles.left}>

                    <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={[nodeKey]}
                        onSelect={onSelect}
                        treeData={treeData}
                    />
                </div>
                <div className={styles.right}>
                    <GetRightByKey comKey={nodeKey} />
                </div>
            </div>

        </div>
    )
}


function GetRightByKey({ comKey }: { comKey: string }) {
    const map: any = {
        'scroll': Scroll,
        'gradual': Gradual,
        'grid': Grid,
        'column': Column,
        'zindex': Zindex,
        ...gradualTreeMap,
    }
    const Coms = map[comKey] || (() => '所选节点在map中不存在该key')
    return <Coms />
}