import React from 'react'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'

export default function index() {
    return (
        <div className={styles.hooksTest}>hooks test
            <br />
            <Outlet />
        </div>
    )
}
