import React, { useState } from 'react'
import FiberTest from './fiber'
import styles from './fiber/styles.module.scss'
import { Tree } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import type { DataNode, TreeProps } from 'antd/es/tree';
import Unicode from './unicode';
import Form from './form'
import PostMessageTest from './browserApi/postmessage';
import Safe from './browserApi/safe';
import XmlAndFetch from './browserApi/xmlAndFetch';
import Caches from './browserApi/caches';
import Websocket from './browserApi/websocket';
import ReduxTest from './reduxTest';
import T from './tests';


const treeData: DataNode[] = [
    {
        title: '临时测试',
        key: 't',
    },
    {
        title: 'react',
        key: 'react',
        children: [
            {
                title: 'fiber',
                key: 'react-fiber',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                    },
                ],
            },
            {
                title: '未分类',
                key: '0-0-1',
                children: [
                    {
                        title: 'Unicode字符集',
                        key: 'unicode',
                    },
                ],
            },
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
    }, {
        title: 'html',
        key: 'html',
        children: [
            {
                title: '表单相关',
                key: 'form'
            }
        ]
    }, {
        title: '浏览器',
        key: 'browser',
        children: [
            {
                title: '跨窗口通信',
                key: 'PostMessageTest',
            }, {
                title: '安全问题',
                key: 'safe'
            }, {
                title: 'fetch和xml',
                key: 'XmlAndFetch'
            }, {
                title: '浏览器缓存',
                key: 'caches'
            }, {
                title: 'Websocket',
                key: 'Websocket'
            }
        ]
    }, {
        title: 'redux',
        key: 'redux',
    }
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
        'react-fiber': FiberTest,
        'unicode': Unicode,
        'form': Form,
        'PostMessageTest': PostMessageTest,
        'safe': Safe,
        'XmlAndFetch': XmlAndFetch,
        'caches': Caches,
        'Websocket': Websocket,
        'redux': ReduxTest,
        't': T
    }
    const Coms = map[comKey] || (() => '所选节点在map中不存在该key')
    return <Coms />
}