import React from 'react'
import styles from './styles.less'

export default function Zindex() {
    return (
        <div>
            <h2>层叠上下文：</h2>
            为什么是显示5而不是显示10？ <br />
            5和10属于不同的层叠上下文，所以比较父级层叠上下文：也就是5和d2（opacity创建了层叠上下文）,他们同属于.container这个层叠上下文， <br />
            而d5的z-index是auto（等于0），所以就看不到它了
            <div className={styles.container}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>
                    <div style={{ zIndex: '1' }} >5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
                <div id='d2' style={{ opacity: '0.9' }}>
                    <div>8</div>
                    <div>9</div>
                    <div style={{ zIndex: '10' }}>10</div>
                    <div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
