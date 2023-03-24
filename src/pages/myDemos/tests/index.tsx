import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.less'

const pageArr = Array(5).fill('empty')
export default function T() {
    const pagesContainer = useRef<HTMLDivElement>(null)
    const [current, setCurrent] = useState<any>({ v: 0, dir: '' })

    useEffect(() => {
        if (current.dir !== '') {
            scrollPage(pagesContainer.current, current.v, current.dir)
        }

    }, [current])

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        const next = current.v - 1
                        if (next < 0) {
                            return
                        } else {
                            setCurrent({
                                v: next,
                                dir: 'left'
                            })
                        }
                    }}>左翻页</button>
                <button
                    onClick={() => {
                        const next = current.v + 1
                        if (next > pageArr.length - 1) {
                            return
                        } else {
                            setCurrent({
                                v: next,
                                dir: 'right'
                            })
                        }

                    }}>右翻页</button>
            </div>
            <div className={styles.container}>
                <div ref={pagesContainer} className={styles.pagesContainer}>
                    {
                        pageArr.map((v, index: number) => {
                            return <div className={`${styles.page} ${index === current.v ? styles.visiblePage : ''}`}>
                                <h2>文字文字文字{current.v}</h2>
                                <h3>文字文字文字 </h3>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function scrollPage(d: HTMLDivElement | null, current: number, dir: string) {
    if (d) {
        if (dir === 'right') {
            d.scrollBy({
                left: 800
            });
            if (d.children[current]) {
                if (!d.children[current].classList.contains(styles.currentLeft)) {
                    d.children[current].classList.add(styles.currentRight);
                } else {
                    d.children[current].classList.replace(styles.currentLeft, styles.currentRight)
                }
            }

            if (d.children[current - 1]) {
                if (!d.children[current - 1].classList.contains(styles.currentLeft)) {
                    d.children[current - 1].classList.add(styles.currentRight);
                } else {
                    d.children[current - 1].classList.replace(styles.currentLeft, styles.currentRight)
                }
            }

            clearClass(d)

        } else {
            d.scrollBy({
                left: -800
            });
            if (d.children[current]) {
                if (!d.children[current].classList.contains(styles.currentRight)) {
                    d.children[current].classList.add(styles.currentLeft);
                } else {
                    d.children[current].classList.replace(styles.currentRight, styles.currentLeft);
                }
            }

            if (d.children[current + 1]) {
                if (!d.children[current + 1].classList.contains(styles.currentRight)) {
                    d.children[current + 1].classList.add(styles.currentLeft);
                } else {
                    d.children[current + 1].classList.replace(styles.currentRight, styles.currentLeft);
                }
            }

            clearClass(d)

        }

    }
}

function clearClass(d: HTMLDivElement | null) {
    if (d) {
        setTimeout(() => {
            for (const page of d.children) {
                page.classList.remove(styles.currentRight, styles.currentLeft)
            }
        }, 550);

    }

}
