import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.less'

export default function Transaction() {
    const [time, setTime] = useState(5)
    const num = useRef<HTMLDivElement>(null)
    const dot = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (dot.current) {
            randomFloat(dot.current)
        }
    }, [])

    return (
        <div>
            <h3>
            </h3>
            transaction-delay可以使用负数：
            从n开始：
            <input value={time} onChange={(e) => setTime(+e.target.value)} type="number" />
            普通过渡：
            <br />
            <button onClick={() => go(num.current)}>点击添加过渡class：go</button>
            <button onClick={() => remove(num.current)}>移除class:go</button>
            <br />
            <div className={styles.container}>
                <div ref={num} onTransitionEnd={transitionEnd} style={{ transitionDelay: `${-time}s` }} >123456789</div>
            </div>
            <br />
            <br />
            结论：<br />
            1. 添加过渡属性，在过渡结束前移除它，会直接中断过渡，并且onTransitionEnd也不会触发
            <br /><br /><br />
            <div className={styles.dotContianer}>

                <div ref={dot} className={styles.dot}>123</div>
            </div>
        </div>
    )
}

function transitionEnd(e: any) {
    /* 
transitionend 的事件对象有几个特定的属性：
event.propertyName ：当前完成动画的属性，这在我们同时为多个属性加上动画时会很有用。
event.elapsedTime ：动画完成的时间（按秒计算），不包括 transition-delay。
    */

    console.log('过渡结束：', e)
}


function go(d: HTMLDivElement | null) {
    if (d) {
        d.classList.add(styles.go)
    }
}


function remove(d: HTMLDivElement | null) {
    if (d) {
        d.classList.remove(styles.go)
    }
}

function randomFloat(d: HTMLDivElement | null,step:number=0) {
    if (d) {
        let dx = +(Math.random() * 2).toFixed()
        dx = dx * (-1) ** dx
        let left = parseInt(d.style.left) || 100;
        if (left + dx < -10 || left + dx > 300) {
            d.style.left = (left - dx) + 'px'
        } else {
            d.style.left = (left - dx) + 'px'
        }

        requestAnimationFrame(() => randomFloat(d,dx))
    }

}