import React from 'react'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'

export default function index() {
    let str = '\n123\n123'

    return (
        <div className={styles.hooksTest}>hooks test
            <br />
            <Outlet />

            <h2><span style={{ display: 'inline-block' }}>123</span><span>{str}</span></h2>
            <h2></h2>
            <h2></h2>
        </div>
    )
}
