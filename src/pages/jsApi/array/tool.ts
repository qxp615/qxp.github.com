
/** 制造防抖函数，持续点击，只有最后一次点击有效 */
export function fd(fn: Function, time: number) {
    let timer: NodeJS.Timeout

    return (...arg: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...arg)
        }, time);

    }
}

/** 节流函数，time秒内最多只执行一次 */
export function jl(fn: Function, time: number) {
    let timer = 0
    return (...arg: any) => {
        const now = new Date().getTime()
        if (now - timer > time) {
            timer = now
            return fn(...arg)
        }

    }
}

const iteratorRange = (from:number, to:number) => {

    return {
        from,
        to,
        [Symbol.iterator]() {
            return {
                current: this.from,
                end: this.to,
                next() {
                    if (this.current > this.end) {
                        return {
                            done: true,
                            value: [this.end,'值']
                        }
                    } else {
                        return {
                            done: false,
                            value:[this.current++,'值']
                        }
                    }

                }
            }
        }
    }
}

let map = new Map()
map.set('a','字母a')
map.set('b','字母b')

console.log(Array.from(map.keys()))