import { Step } from 'antd-mobile/es/components/steps/step'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Tooltip } from 'antd'
import styles from './style.less'
// 0x10FFFF

// 生成from到to的Unicode字符集
function getShip(from: number, to: number) {
    const text = []
    for (let index = from; index <= to; index++) {
        text.push(<span title={`\\u{${index.toString(16).padStart(6,'0')}}`} className={styles.singleText}>
                {String.fromCodePoint(index)}
        </span>)
    }
    return text
}

export default function Unicode() {
    const container = useRef<HTMLDivElement>(null)
    const [startValue, setStartValue] = useState(0)
    const [step, setStep] = useState(400)

    return (
        <div>
            <h2>一些unicode字符</h2>
            <p>unicode字符集：起止值不得超过这个范围：0-1114111（0x10FFFF）
                <br />
                当前范围：{startValue}-{startValue + step}
            </p>
            <button onClick={() => {
                const nextStart = startValue + step;
                if ((nextStart >= 0) && (nextStart <= 0x10FFFF - step)) {
                    setStartValue(nextStart)
                }
            }}>加{step}</button><button onClick={() => {
                const nextStart = startValue - step;
                if ((nextStart >= 0) && (nextStart <= 0x10FFFF)) {
                    setStartValue(nextStart)
                }
            }}>减{step}</button>
            <div ref={container} className={styles.text}>
                {
                    getShip(startValue, startValue + step)
                }
            </div>
        </div>
    )
}
