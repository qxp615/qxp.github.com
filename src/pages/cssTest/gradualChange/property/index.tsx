import React from 'react'

export default function Property() {
    return (
        <div>
            <h2>点这里：<a target='blank' href="https://juejin.cn/post/7174439892993179662 ">自定义属性</a></h2>
            <div>
                自定义属性是注册于window.CSS中的，在css中注册一个属性，如同调用
                <pre>
                    {
                        `window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "red",
});`
                    }
                </pre>
                <p>然后所有dom都可以使用这个属性了（就像color属性那样），默认值为red，
                    用的时候把它当成css变量即可，只是自定义属性它可以使用过渡和动画</p>
            </div>
        </div>
    )
}
