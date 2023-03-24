import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './count';

export default function ReduxTest() {
    // 使用这个去使用slice的reducers更新它的state
    const dispatch = useDispatch()

    // 使用useSelector去获取全局的state，
    const count = useSelector((state: any) => state.counter)
    return (
        <div>
            <button onClick={() => {
                setTimeout(() => {
                    dispatch(increment())
                }, 2000);

            }}>点击全局cout+1</button> <br /><br />
            valueObj:{count.valueObj.v} <br />
            value:{count.value}
        </div>
    )
}
