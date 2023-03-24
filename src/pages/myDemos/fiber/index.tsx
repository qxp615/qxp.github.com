import React from 'react'

export default function FiberTest() {
    const D1 = <div>123<p>456</p></div>
    console.log(D1)
    return (
        <div>
            <h2>fiber（所看的react代码是2022年8月从GitHub拉下来的）</h2>
            <p>首先，看 <a href="https://juejin.cn/post/6966180503003070500">生命周期</a></p>
            <p>
                react采用的是同步递归的形式（虚拟dom里面有children，children还有children，只能使用递归）去根据虚拟dom来更新节点，
                当节点很深，很多的时候，递归就会很耗时
            </p>
            <p> 高质量：<a href="https://juejin.cn/post/6943896410987659277#heading-10">fiber掘金解释-1</a> </p>
            <p>
                <a href='https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7'>requestIdleCallback</a>
            </p>
            <p>由于requestIdleCallback的一些缺陷：（实际只有20帧，兼容性太差）react已经使用requestHostCallback（react基于MessageChannel（优先）/settimeout实现的函数）来替代;
                至于为什么不用微任务；因为对一个事件循环机制来说，在页面更新前，会将所有的微任务全部执行完，故无法达成将主线程让出给浏览器的目的。

            </p>
            <h2>个人理解：</h2>
            <p>在fiber出现之前（16.3）之前，
                react是直接对比更新前后的虚拟dom树（diff递归算法：react优化后的树遍历算法），当树很深很大的时候，这个算法是很消耗时间的；
                虚拟dom树的数据结构：
                <pre>
                    {
                        `
                        {
                            key:..,
                            props:..,
                            children:..,
                            ...
                        }
                        `
                    }
                </pre>
                它只记录了子节点，这就导致了它只能自上而下的去遍历
                <br />
                于是出现了fiber：
                fiber在虚拟dom的基础上，由树变成了链表，每个fiber节点依然和旧的虚拟dom节点一样，不同的是，fiber新增了属性：
                <pre>
                    {
                        `
                        {
                            key:..,
                            props:..,
                            child: 第一个子节点,
                            sibling: 本节点的下一个节点,
                            return: 父节点
                        }
                        `
                    }
                </pre>
                变成链表的fiber数据结构，只要知道它的一个节点，就可以知道这个数据的所有节点，这样就可以每次只比对一个节点；
                异步比对，react则是使用了基于宏任务channelMessage/定时器实现的requestHostCallback函数，弄了一套异步调度算法；
                这样，diff算法就变成异步的宏任务了；如果有优先级更高的事件，比如用户输入，微任务之类的，那么diff算法就会
            </p>
        </div>
    )
}
