import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from 'antd'
import { hashGo } from '../../utils'
import styles from './styles.module.css'

export default function Index() {
    return (
        <div className={styles.container} >
            <div className={styles.top}>
                二次封装的组件
                <Menu defaultSelectedKeys={['AntdMobileCom']} mode='horizontal'>
                    <Menu.Item key='AntdMobileCom' onClick={() => hashGo('/components/antd-mobile')}>AntdMobileCom</Menu.Item>
                </Menu>
                <br></br>

            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}
