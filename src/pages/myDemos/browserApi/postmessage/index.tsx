import React, { useState, useEffect } from 'react'

export default function PostMessageTest() {
    const [url, setUrl] = useState(window.location.origin)
    const [text, setText] = useState('传输的内容')
    // 与win互相传递消息
    const [win, setWin] = useState<Window | null>()

    const go = () => {
        if (!win || win.closed) {
            // 窗口不存在或者窗口被关闭了，重新打开窗口
            let w = window.open(url, url)
            setWin(w)
        }
        console.log(win)
        win?.postMessage(text, url); //让url信任当前源，
    }

    useEffect(() => {
        // @ts-ignore
        window.onmessage = (handle: WindowEventHandlers, v: MessageEvent) => {
            console.log('接受到的内容:', { handle, v })
            return ''
        }
    })


    return (
        <div>
            <h3>PostMessage测试</h3>
            向该网站发送信息：<input value={url} onChange={(v) => {
                setUrl(v.target.value)
            }} type="text" /> <br /> <br />
            该窗口关闭后重新打开： <input type="checkbox" /> <br /><br />
            需要传输的内容：<input value={text} onChange={(v) => {
                setText(v.target.value)
            }} type="text" />
            <button onClick={go}>发送内容</button>
        </div>
    )
}
