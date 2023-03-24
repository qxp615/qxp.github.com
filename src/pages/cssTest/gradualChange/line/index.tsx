import React from 'react'
import styles from './styles.less'

export default function Line() {
    return (
        <div>
            <h3>
                线性渐变
            </h3>
            <div className={styles.container}>
                <div className={styles.line_1}></div>
                <div className={styles.line_2}></div>
                <div className={styles.line_3}></div>
                <div>
                    <div className={styles.line_4}></div>
                    通过size和center可以对线性渐变进行裁剪出各种规则几何形状,
                    但是无法进行旋转，可以使用伪元素（黑色）
                </div> 
                <div className={styles.line_5}></div>
                <div className={styles.line_6}></div>
                <div className={styles.line_7}></div>
                <div className={styles.line_8}></div>
            </div>
        </div>
    )
}
