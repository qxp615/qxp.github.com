import React, { useRef, useState, useEffect, useLayoutEffect, useMemo } from 'react'
import styles from './styles.less'
import { fd, jl } from './tool'

export default function ArrayTest() {
    // rect的高度
    const [count, setCount] = useState(100)
    const rect = useRef<HTMLDivElement | null>(null)
    useLayoutEffect(() => {

    })
    const addHeight = () => {

        if (rect.current) {
            console.log('+10')
            let height = parseInt(getComputedStyle(rect.current).height)
            setCount(height + 20)
        }
    }
    const addHeightFd = useMemo(() => jl(addHeight, 1000), [])
    return (
        <div className={styles.array}>Array
            <p onClick={addHeightFd}>点击高度+10</p>
            <div style={{
                height: count + 'px'
            }} ref={rect} className={styles.redRect}>
                点击上面的东西，这个的高度将会+10px
            </div>
        </div>
    )
}
