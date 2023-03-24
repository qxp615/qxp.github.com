import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Input } from 'antd'
import styles from './styles.less'

export default function Scroll() {
    const scroll_1 = useRef<any>()
    const scroll_2 = useRef<any>()
    const [value, setValue] = useState('50')

    let timer: any;
    const checkScroll = () => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            // 滚动完成后顶部高度
            const scrollTop = scroll_2.current.scrollTop
            // 滚动完成后底部剩余高度
            const restHeight = scroll_2.current.scrollHeight - scrollTop - scroll_2.current.offsetHeight
            const second = scroll_2.current.children[1]
            const lastSecond = scroll_2.current.children[scroll_2.current.children.length - 2]
            if (scrollTop < 10) {
                lastSecond.scrollIntoView()
            } else if (restHeight < 10) {
                second.scrollIntoView()
            }
        }, 5);
    }
    const scroll = (snap: number) => {
        scroll_1.current.scrollBy({
            top: snap,
            behavior: 'smooth'
        })
        scroll_2.current.scrollBy({
            top: snap,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const second = scroll_2.current.children[1]
        second.scrollIntoView()
    }, [])

    return (
        <div className={styles.container}>
            <div>
                scroll-snap-type: both proximity;
                <div ref={scroll_1} className={styles.scroll_1}>
                    <div className={styles.scrollDiv}>1</div>
                    <div className={styles.scrollDiv}>2</div>
                    <div className={styles.scrollDiv}>3</div>
                    <div className={styles.scrollDiv}>4</div>
                    <div className={styles.scrollDiv}>5</div>
                    <div className={styles.scrollDiv}>6</div>
                    <div className={styles.scrollDiv}>7</div>
                </div>
            </div>
            <div>
                scroll-snap-type: both mandatory;
                <div onScroll={checkScroll} ref={scroll_2} className={styles.scroll_2}>
                    {/* 首尾衔接，等最后一个1滚动完毕之后，使用定时器立即跳转到第一个1，等最后一个7滚动完毕之后，立即跳转到最后一个7 */}
                    <div className={styles.scrollDiv}>7</div>
                    <div className={styles.scrollDiv}>1</div>
                    <div className={styles.scrollDiv}>2</div>
                    <div className={styles.scrollDiv}>3</div>
                    <div className={styles.scrollDiv}>4</div>
                    <div className={styles.scrollDiv}>5</div>
                    <div className={styles.scrollDiv}>6</div>
                    <div className={styles.scrollDiv}>7</div>
                    <div className={styles.scrollDiv}>1</div>
                </div>
            </div>
            <div>
                <Input value={value} onChange={(v) => { setValue(v.target.value) }} />
                <button onClick={() => scroll(+value)}>左右两个均向下滚动{value}px</button><br /><br />
                <button onClick={() => scroll(-+value)}>左右两个均向上滚动{value}px</button><br />
                实际应该使用元素高度相同的值，而不是10px，因为有时候会失效
            </div>
        </div>
    )
}
