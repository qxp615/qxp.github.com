import React from 'react'
import styles from './styles.less'

export default function Transform() {
    return (
        <div>
            <h2>2d,3d变幻</h2>
            <div>
                <h4>基础2d变</h4>
                rotate() <br />
                所有的旋转，正数为顺时针。左手螺旋法则； <br /><br />
                scale() <br />
                单边缩放看起来就像拉伸 <br /><br />
                translate <br />
                移动方向是父元素的xyz方向，而不是本元素的xyz方向；证：
                修改t1的skew，再修改222的translate，发现它不再是垂直/水平方向移动

                <div className={styles.t1}>
                    <div>2222</div>
                </div>
                <div className={styles.t2}>
                    <div className={styles.t2Box}>
                        <div className={styles.t2_1}>1</div>
                        <div className={styles.t2_2}>2</div>
                        <div className={styles.t2_3}>3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
