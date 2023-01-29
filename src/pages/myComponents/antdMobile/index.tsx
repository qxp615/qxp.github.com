import React from 'react'
import { Tree } from 'antd'
import { treeDate } from './data'
import style from './styles.module.css'
import { Outlet } from 'react-router-dom'



export default function AntdMobileCom() {

    const selectTreeNode = (key: any, info: any) => {
        info.node?.info?.onClick()
    }
    return (
        <div className={style.container}>
            <div className={style.left}>
                AntdMobileCom

                <Tree defaultExpandAll showLine onSelect={selectTreeNode} treeData={treeDate}>

                </Tree>
            </div>
            <div className={style.right}>
                <Outlet />
            </div>

        </div>
    )
}
