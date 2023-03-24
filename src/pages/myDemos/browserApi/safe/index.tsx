import React from 'react'

export default function Safe() {
    return (
        <div>
            <h3>点劫持攻击</h3>
            <p>原理：假设我是一个恶意网站，做了一个按钮：点击经验加3；并且把弄个iframe，把csdn的关注按钮对准这个+3按钮，
                那么当你打开恶意网站，就会加载这个iframe，由于自动登录，csdn会自动登录上，当你点击+3，实际点击的就是你登录后的csdn的按钮，
            </p>
            <p>防止的方法：
                http头中加： <br />
                X-FRAME-OPTIONS <br />

                X-FRAME-OPTIONS是微软提出的一个http头，专门用来防御利用iframe嵌套的点击劫持攻击。并且在IE8、Firefox3.6、Chrome4以上的版本均能很好的支持。

                这个头可以配置：<br />

                DENY 拒绝任何域加载 <br />
                SAMEORIGIN 允许同源域下加载 <br />
                ALLOW-FROM 可以定义允许frame加载的页面地址 <br />
            </p>
            这样就可以禁止该网站在iframe中显示，比如百度：
            <iframe src="https://www.baidu.com" width={100} height={200}></iframe>

            <br />
            <br />
            <h3>CSRF/XSRF 攻击</h3>
            <h4><a href="https://zh.javascript.info/cookie#samesite">sameSite有关于此</a></h4>

            想象一下，你登录了 bank.com 网站。此时：你有了来自该网站的身份验证 cookie。你的浏览器会在每次请求时将其发送到 bank.com，以便识别你，并执行所有敏感的财务上的操作。

            现在，在另外一个窗口中浏览网页时，你不小心访问了另一个网站 evil.com。该网站具有向 bank.com 网站提交一个具有启动与黑客账户交易的字段的表单<br />{` <form action="https://bank.com/pay">`} 的 JavaScript 代码。

                你每次访问 bank.com 时，浏览器都会发送 cookie，即使该表单是从 evil.com 提交过来的。因此，银行会识别你的身份，并执行真实的付款。
            <img src="https://www.bilibili.com/video/BV12X4y1D7zC/?spm_id_from=333.1007.tianma.1-3-3.click&vd_source=9a237b0a6eef6c0c2453d4bfeeeb3d83" alt="" />
        </div>
    )
}
