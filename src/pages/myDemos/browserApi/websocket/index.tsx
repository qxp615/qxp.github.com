import React, { useEffect, useState, useRef } from 'react'
let socket:WebSocket

export default function Websocket() {
    let socketRef = useRef<WebSocket>()
    const [v, setV] = useState('')

    useEffect(() => {
        
        if (socketRef.current) {
            return;
        }
        console.log('创建websocket')
        socketRef.current = new WebSocket("ws://127.0.0.1:3008");

        socketRef.current.onopen = function (e) {
            socketRef.current?.send("My name is John");
        };

        socketRef.current.onmessage = function (event) {
            console.log(`接收到数据: ${event.data}`);
        };

        socketRef.current.onclose = function (event) {
            if (event.wasClean) {
                console.log(`[close]888 Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                // 例如服务器进程被杀死或网络中断
                // 在这种情况下，event.code 通常为 1006
                console.log('[close]888 Connection died');
            }
        };

        socketRef.current.onerror = function (error) {
            console.error(`websocket错误`, error);
        };
    }, [])

    return (
        <div>
            <input value={v} onChange={(e) => setV(e.target.value)} type="text" /> <br />
            <button onClick={() => socketRef.current?.send(v)}>发送</button>
        </div>
    )
}
